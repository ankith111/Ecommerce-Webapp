import psycopg2
from Apps.logistics.custom_libs.get_iso3_code import get_code
import os

# os.environ["DATABASE_URL"] = "localhost"
# os.environ["POSTGRES_USER"] = "postgres"
# os.environ["POSTGRES_PASSWORD"] = "postgres"

os.environ["DATABASE_URL"] = "goglocal-postgre2.postgres.database.azure.com"
os.environ["POSTGRES_USER"] = "postgres"
os.environ["POSTGRES_PASSWORD"] = "jayash!123"



conn = psycopg2.connect(
    dbname = "logistics",
    host = os.getenv("DATABASE_URL"),
    user = os.getenv("POSTGRES_USER"),
    password = os.getenv("POSTGRES_PASSWORD")
)
conn.autocommit = True
cursor = conn.cursor()



logistic_partners = {
    1 : 'Aramex',
    2 : 'Bluedart',
    3 : 'DTDC',
    4 : 'Shiprocket',
    5 : 'UPS Economy',
    6 : 'UPS Express',
    7 : 'Delhivery',
    8 : 'Fedex',
    0 : 'Other'
}






def get_shipping_partners(weight, country):

    country = get_code(country).lower()

    result = []
    

    cursor.execute("SELECT DISTINCT ON (partner_id) partner_id,MIN(price) FROM logistics WHERE country = %s AND weight >= %s GROUP BY partner_id", (country, weight))
    rows = cursor.fetchall()

    print(rows)


    for row in rows:
        partner_id = int(row[0])
        cur_price = float(row[1])
        main_price = cur_price



        cursor.execute("SELECT * FROM logistic_partners WHERE id = %s", (partner_id,))
        row = cursor.fetchone()
        

        operations = []
        ddp_frdm = row[2].split(" + ")
        fixed_cost = row[3].split(" + ")

        cursor.execute("SELECT * FROM add_on_charges WHERE country = %s AND logistic_partner = %s", (country, partner_id))
        rows = cursor.fetchone()

        print(rows)
        
        if not rows:
            continue

        covid_surcharge = rows[3].split(" + ")
        fuel_surcharge = rows[4].split(" + ")
        exchange_surcharge = rows[5].split(" + ")
        residential_delivery_surcharge = rows[6].split(" + ")
        emergency_situation_surcharge = rows[7].split(" + ")
        peak_surcharge = rows[8].split(" + ")

        operations.append(ddp_frdm)
        operations.append(fixed_cost)
        operations.append(covid_surcharge)  
        operations.append(fuel_surcharge)
        operations.append(exchange_surcharge)
        operations.append(residential_delivery_surcharge)
        operations.append(emergency_situation_surcharge)
        operations.append(peak_surcharge)

        for operation in operations:
            if operation[1] == "normal":
                cur_price += float(operation[0])
            elif operation[1] == "percent":
                cur_price += (float(operation[0])/100)*main_price
            elif operation[1] == "perkg":
                cur_price += float(operation[0])*weight

        result.append({
            "name" : logistic_partners[partner_id],
            "price" : float("{:.2f}".format(cur_price)),
            "mode": 'Express' if partner_id != 5 else 'Economy',
            'delivery_period' : '4',
        })
    
    result = sorted(result, key=lambda k: k['price'])

    return result



def lcs(X, Y):
    m = len(X)
    n = len(Y)

    L = [[0 for i in range(n+1)] for j in range(m+1)]
 
    for i in range(m+1):
        for j in range(n+1):
            if i == 0 or j == 0:
                L[i][j] = 0
            elif X[i-1] == Y[j-1]:
                L[i][j] = L[i-1][j-1] + 1
            else:
                L[i][j] = max(L[i-1][j], L[i][j-1])
 
    lcs = ""
 
    i = m
    j = n
    while i > 0 and j > 0:
 
        if X[i-1] == Y[j-1]:
            lcs += X[i-1]
            i -= 1
            j -= 1
 
        elif L[i-1][j] > L[i][j-1]:
            i -= 1
             
        else:
            j -= 1
 
    lcs = lcs[::-1]

    return lcs




country_codes = {
    "unites states of america" : "USA",
    "canary islands" : "ESP",
    "saipan" : "MNP",
    "netherlands antilles": "ANT",
    "tahiti": "PYF",
}



import pycountry



import pandas as pd
import country_converter as coco
cc = coco.CountryConverter()




def find_using_lcs_method(country):
    result = ""
    count = 0

    for i in pycountry.countries:
        f = i.name.lower().strip()

        if f == country:
            result = i.alpha_3
            break

        if country in country_codes:
            result = country_codes[country]
            break
            
        x = lcs(f, country)
        if not x:
            continue
        y = len(x)

        if (y > count):
            count = y
            result = i.alpha_3

    return result



def get_code(country):
    
    x = cc.convert(country, to="ISO3")

    if x == "not found":
        return find_using_lcs_method(country)
    else:
        return x

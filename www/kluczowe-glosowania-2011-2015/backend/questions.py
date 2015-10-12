# creates questions.json

import csv
import json

appendixes = [""]

for appendix in appendixes:
    data = []
    with open("questions.csv") as fin:
        csvd = csv.DictReader(fin)
        for r in csvd:
            if r['order'].strip() != '':
                it = {
                    "id": r['id'],
                    "name": r['name' + appendix],
                    "question": r['question' + appendix],
                    "description": r['description' + appendix],
                    "order": float(r['order']),
                    "date": r['date'],
                    "document_link": r['document_link'],
                    "mpw_link": r['mpw_link'],
                    "identifier": r['identifier'],
                    "polarity": r['polarity']
                }
                
                data.append(it)

    data = sorted(data, key=lambda item: item['order'])

    with open("../questions" + appendix + ".json","w") as fout:
        json.dump(data,fout)
        

import json

## FUNCTION Usage 
# from campuswiresearch import searchTerm
# output = searchTerm(term)
def searchTerm(term):
     term = term.lower()
     term = " ".join(term.split())
     term = term.replace(" ","_")
     # Opening JSON file
     f = open('../campuswire_raw_data/' + term + '.json')
     # returns JSON object as
     # a dictionary
     rawdata = json.load(f)
     # Iterating through the json
     # list
     count = 1
     csvString = ''
     #csv.register_dialect('unixpwd', delimiter=':', quoting=csv.QUOTE_MINIMAL)
     data = {}
     data[term] = []
     
     with open("../output/" + term + 'JSON.json', 'w') as cj:
      #writer = csv.writer(cf)
      for post in rawdata['posts']:
        #print(post)
        print(count)
        body = " ".join(post["body"].split())
        body = body.replace(':',"|")
        body = body.replace('==',"")
        body = body.replace(',',"")
        title = " ".join(post["title"].split())
        title = title.replace(':',"|")
        title = title.replace('==',"")
        title = title.replace(',',"")
        #line = term +" , " + "title='" + title + " , " + "body='"  + "'" + body + "'" +" , " + "url='https://campuswire.com/c/G0A3AA370/feed/post/" + str(post['number']) + "'" + " , " + "rank='" + str(count) + "'" + "\n"
        #line = term +" , " + "'" + title + " , " + "'"  + "'" + body + "'" +" , " + "'https://campuswire.com/c/G0A3AA370/feed/post/" + str(post['number']) + "'" + " , " + "'" + str(count) + "'" + "\n"
        data[term].append({
             'title': title,
             'body': body,
             'url': "https://campuswire.com/c/G0A3AA370/feed/post/" + str(post['number']),
             'rank': str(count)
        })
        #line = term +" , " + title + " , " + body +" , " + "https://campuswire.com/c/G0A3AA370/feed/post/" + str(post['number']) + " , " + str(count) + "\n"
        count = count + 1
        #cj.write(line)
        
        #writer.writerow(line)      
      json.dump(data, cj)  
      # Closing file
      cj.close()
     f.close() 
     return data


output = searchTerm("Mean Average Precision")
#print(output)

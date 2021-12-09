import PyPDF2
import re
import json

## FUNCTION Usage 
# from pdfsearch import searchPDFTerm
# output = searchTerm(pdfFilePath,term)
# for ex: output = searchPDFTerm("../pdf/2915031.pdf", "precision") returns json
def searchPDFTerm(filePath,term):
  # open the pdf file
  object = PyPDF2.PdfFileReader(filePath)
  url = "https://i-share-uiu.primo.exlibrisgroup.com/permalink/01CARLI_UIU/1ubbi2j/alma99839869412205899";
  # get number of pages
  NumPages = object.getNumPages()

  pagenumbers = ""
  sequence = []
  data = {}
  data[term] = []
  # extract text and do the search
  for i in range(0, NumPages):
    PageObj = object.getPage(i)
    
    pdfText = PageObj.extractText() 
    # print(Text)
    resSearch = re.search(term.lower(), pdfText.lower())
    
    if (resSearch):
        if (pagenumbers != ""):
         seqLen = len(sequence)   
         if (( seqLen != 0) and (sequence[seqLen-1] == i)):
             sequence.append(i+1)
         else:
              if (len(sequence) > 1):   
                 pagenumbers = pagenumbers + "-" + str(i)
                 sequence = []
                 sequence.append(i+1)
              else:   
                 pagenumbers = pagenumbers + "," +  str(i+1)
                 sequence = []
                 sequence.append(i+1)
        else:
         pagenumbers =  str(i+1)
         sequence.append(i+1)     
        #print("this is page " + str(i+1)) 
    else:
        if ((len(sequence) != 1) and (len(sequence) != 0)):   
            pagenumbers = pagenumbers + "-" + str(i)
        sequence = []
  data[term].append({
             'url': url,
             'pagenumbers': pagenumbers
        })      
  print(pagenumbers)
  return data

results = searchPDFTerm("../pdf/2915031.pdf", "precision")
print(results)

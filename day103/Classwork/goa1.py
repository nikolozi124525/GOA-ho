import re

def to_camel_case(text):
  
    words = re.split('[-_]', text)
    
   
    if len(words) > 0:
        words[0] = words[0].lower()  
    
        for i in range(1, len(words)): 
            words[i] = words[i].capitalize()  
    
  
    return ''.join(words)

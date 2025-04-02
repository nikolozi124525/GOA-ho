def is_comfortable_word(word):

    left_hand = set('qwertasdfgzxcvb')
    right_hand = set('yuiophjklmn')

    previous_hand = None
    
    for letter in word:

        if letter in left_hand:
            current_hand = 'left'
        elif letter in right_hand:
            current_hand = 'right'
        else:
            continue  
        
        
        if previous_hand == current_hand:
            return False
        
        
        previous_hand = current_hand

    return True


print(is_comfortable_word("yams"))  
print(is_comfortable_word("test"))  

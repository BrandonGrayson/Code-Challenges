#Python Anagram

# def count_unique_values(someList: list):
#     i = 0;
#     somelist = [1, 1, 2, 2, 3, 4, 5]
#     for j in somelist:
#         if (someList[i] != someList[j]):
#             i += 1;
#             someList[i] = someList[j];
#     print(i + 1);

# listarr = [1, 1, 2, 2, 3, 4, 5]

# count_unique_values(listarr)

def count_unique_values(): 
    i = 0
    j = 1
    some_list = [1, 1, 2, 2, 3, 4, 5]

    while j <= (len(some_list) - 1):     
        if (some_list[i] != some_list[j]):
            i+=1
            some_list[i] = some_list[j];
        elif (some_list[i] == some_list[j]):
            j+=1
    print(i + 1)

count_unique_values()
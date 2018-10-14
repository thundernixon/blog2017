import os
import fileinput

yamlToAdd = """
description: ""
thumbnail: ""
"""

def filesToEdit(fileName, parentDir):
    listOfFilesToEdit=[]
    for node in os.listdir(parentDir):
        if os.path.isdir(parentDir + node):
            print(node)
            for childNode in os.listdir(parentDir + node):
                if childNode == fileName:
                    print("\t" + childNode)
                    listOfFilesToEdit.append(parentDir+node+"/"+childNode)

    return(listOfFilesToEdit)

def insertYamlAfter(yamlToAdd, yamlEntry, fileName, parentDir):

    yamlPattern = yamlEntry + ': "'
    # print(filesToEdit(fileName, parentDir))

    for filePath in filesToEdit(fileName, parentDir):
        for line in fileinput.input(filePath):
            if yamlPattern in line:
                print(line)
                line=line.replace(line,line+yamlToAdd)

            # TODO: make this more robust?
                # find first "---"
                # if second "---", stop looking
                # unless in ``` and ```

# for line in fileinput.FileInput(file_path,inplace=1):
#     if "TEXT_TO_SEARCH" in line:
#         line=line.replace(line,line+"NEW_TEXT")
#     print(line, end=''

insertYamlAfter(yamlToAdd, "title", "index.md", "src/pages/")
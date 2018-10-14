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
                if ".md" in childNode:
                    print("\t" + childNode)
                    listOfFilesToEdit.append(parentDir+node+"/"+childNode)

    return(listOfFilesToEdit)

def insertYamlAfter(yamlToAdd, yamlEntry, fileName, parentDir):

    yamlPattern = yamlEntry + ': "'
    # print(filesToEdit(fileName, parentDir))

    for filePath in filesToEdit(fileName, parentDir):
        # for line in fileinput.FileInput(filePath,inplace=1):
        #     print(line)
        #     if yamlPattern in line:
        #         print(line)
        #         newLines = line+yamlToAdd
        #         line=line.replace(line,newLines)
        #         print("\t"+newLines)
        with fileinput.FileInput(fileName, inplace=True, backup='.bak') as file:
            for line in file:
                if yamlPattern in line:
                    newLines = line+yamlToAdd
                    print(line.replace(line, newLines), end='')

            # TODO: make this more robust?
                # find first "---"
                # if second "---", stop looking
                # unless in ``` and ```
                # don't run if "description" already follows "title"


insertYamlAfter(yamlToAdd, "title", "index.md", "src/pages/")
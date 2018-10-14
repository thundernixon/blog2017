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

    for filePath in filesToEdit(fileName, parentDir):

        # Read in the file
        with open(filePath, 'r') as file :
            filedata = file.read()

        lines = filedata.split("\n")

        for line in lines:
            print(line)
            if yamlPattern in line:
                # Replace the target string
                filedata = filedata.replace(line, line+yamlToAdd, end=' ')

        # Write the file out again
        with open(filePath, 'w') as file:
            file.write(filedata)

        # TODO: make this more robust?
            # find first "---"
            # if second "---", stop looking
            # unless in ``` and ```
            # don't run if "description" already follows "title"


insertYamlAfter(yamlToAdd, "title", "index.md", "src/pages/")
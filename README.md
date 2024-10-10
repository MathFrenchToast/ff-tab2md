# ff-tab2md

FF extension to copy paste all the open tabs as a markdown list

## history 
This extension was created as a test for code generation from LLM (at the time of writing : GPT-3.5turbo and Bing)

## the prompt used and refined

```prompt
hello, as an experienced javascript and firefox experienced programmer, can you create a blogpost explaining how to create a firefox extension that will export *all* tabs. As links in markdown format using the tab title as text.
Result will be copied to clipboard.
The extension will have a popup with inside a button to launch the export. It will display the message "tabs copied to clipboard" upon completion

Your ouput will be in markdown, with code block,
starting wiht an short intro.
if there is more than one file needed for the extension, you will output each file in a block of code section, with the filename on top
and an explaination the purpose of each file
You'll add comment to your source code.

You will add to your output explanation on the mandatory step on the how and why for the reader to be able to installed and test the extension.
```

## Lessons learned

- GenCoders proposed code for Chrome and not FF, Chrome being more used, more training content I supposed
- first code produce do not work, due to basic limitation using plain JS whereas writing an extension a serious limitation.
- Many refinement and discussion are needed to comme up with working code.

Conclusion, as ever, you need to exactly know what you want to achieve and what are the common pitfalls to have some productive code.

## todo

[ ] return not working with message

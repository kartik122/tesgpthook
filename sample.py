#!/usr/bin/env python
#hook script to provide modified files to gpt for error check as well as code analysis

import sys
import subprocess
import openai
import os

openai.api_key=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
text = subprocess.run(["git diff", "--name-only"])
files = text.splitlines()
for filepath in files:
	text_file = open(filepath, "r")
	data = text_file.read()
	text_file.close()
	completion = openai.Completion.create(engine="text-davinci-003", prompt="Provide code analysis, security vulnerabilities, find the errors, explain the errors and give corrected code " + data, max_tokens=3500)
	print(completion.choices[0]["text"]
exit(0)


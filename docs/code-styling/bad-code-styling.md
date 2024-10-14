---
sidebar_position: 3
---
# Bad Code Style Examples
These examples show how poor code style practices can lead to code that is difficult to read, maintain, and debug. Issues such as unclear naming, improper use of language features, inconsistent formatting, and poor error handling can all contribute to technical debt and reduce code quality.
## Example 1: C - Addition Function
```c
int add(int a,int b){printf("%d",a+b); // adds two numbers}
```
## Why This is Bad Code Style:

No Spaces After Commas: There are no spaces between parameters (a,int b), making the code harder to read.

Non-Descriptive Function Name: The function name (add) is too generic and does not follow good naming conventions.

Inline Comment Without Spacing: The comment (// adds two numbers) is directly attached to the code, which makes it difficult to distinguish between code and comments.

Single-Line Function Body: The entire function is written in one line, which reduces readability and makes debugging difficult.

## Example 2: Python - Improper List Sorting
```py
def srt(lst):
    return lst.sort()
```
## Why This is Bad Code Style:

Non-Descriptive Function Name: The function name srt is not descriptive, making it unclear what the function does.

Misuse of sort(): The function uses lst.sort(), which sorts the list in place and returns None, potentially causing confusion if the caller expects a sorted list as a return value.

Lack of Documentation: There is no docstring or comment to explain what the function does or what parameters it takes.

## Example 3: JavaScript - Inconsistent Error Handling
```js
function getData(url) {
    fetch(url)
    .then(response => {
        if (response.status != 200) {
            console.log('Error: ' + response.status);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => {});
}
```
## Why This is Bad Code Style:

Inconsistent Error Handling: The catch block is empty, which means that errors are not properly handled or logged, making debugging difficult.

Magic Numbers: The comparison response.status != 200 uses a magic number (200). It would be better to use a named constant for clarity.

Lack of Readable Indentation: The chained .then() calls and inconsistent formatting make the code difficult to read.

Lack of Descriptive Messages: The error message ('Error: ' + response.status) is vague and does not provide much context for the actual issue.

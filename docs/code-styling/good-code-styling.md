---
sidebar_position: 2
---

# Good Code Style Examples

These examples illustrate the benefits of following good code style practices, such as using descriptive naming, proper spacing, clear documentation, and effective error handling. These practices help improve readability, maintainability, and reduce the likelihood of bugs.

## Example 1: Java - Calculator Class

```java
public class Calculator {
    /**
     * Adds two numbers and returns the result.
     *
     * @param a The first number.
     * @param b The second number.
     * @return The sum of the two numbers.
     */
    public int addNumbers(int a, int b) {
        return a + b;
    }
}
```

### Why This is Good Code Style:

Readable Function Name: The function name (addNumbers) is descriptive and follows a consistent naming convention, making it easy to understand the purpose of the function.

Proper Spacing: The code uses spaces between parameters (a, b) which makes the function signature more readable.

Descriptive Documentation: The comment block (/\*\* \*/) provides detailed information about the function, including parameters and the return value. This helps other developers understand the code quickly.

## Example 2: Python - Sorting a List

```python
def sort_numbers(numbers):
    """
    Sorts a list of numbers in ascending order.

    Parameters:
    numbers (list): A list of numbers to be sorted.

    Returns:
    list: A sorted list of numbers.
    """
    return sorted(numbers)
```

### Why This is Good Code Style:

Descriptive Function Name: The function name sort_numbers clearly describes what the function does.

Docstring: The function includes a detailed docstring that describes the parameters and return value, making it easier for other developers to understand the purpose and usage of the function.

Simplicity: The function body is simple and uses Python's built-in sorted() function, demonstrating a clear and efficient approach.

## Example 3: JavaScript - Fetching Data from an API

```js
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
```

### Why This is Good Code Style:

Error Handling: The use of try...catch ensures that errors during the fetch operation are properly handled, making the code more robust.

Clear Function Name: The function name fetchData makes it immediately clear that the function is fetching data.

Readability: Proper indentation and spacing make the code easy to follow. The use of descriptive error messages ('Network response was not ok') helps with debugging.

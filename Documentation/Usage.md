

# Usage

<br>

## Setup

The setup consists of the following three files.

-   **[Workflow]**

-   **[Config]**

-   **[Input]**

<br>
<br>

## Workflow

With the help of a GitHub Workflow you can  
manually and / or automatically generate  
news sections based on your input data.

<br>

### Job

If you already have a workflow and only want  
to integrate this step, use the following code.

<br>

```yaml
-   name : Run News Builder
    uses : MarkedDown/News@1.0.0
    with :
        
        config : .github/.News.yml
```

<br>

> **Note** Adjust the action's version as well  
> as the location of the config as needed.

<br>

### Template

If you want a complete template, in case you for  
example want a workflow dedicated to building  
the news sections, use the following.

<br>

<kbd> <br> [Template Download][Template] <br> </kbd>

<br>

> **Note** Workflows are usually placed   
> at `/.github/workflows/<Workflow>.yml`

<br>
<br>

## Config

The News-Section configuration that allows  
you to specify multiple builds, each with  
their own input and output paths.

<br>

```yaml
-   Inject : 'README.md'
    Input : 'Data.yaml'
```

<br>

Set where the transformed  
**Input** is being **Injected** into.

<br>
<br>

## Input

An input data file is a list of articles, each   
with their own **Title**, **Lines** and **Links**.

<br>

```yaml
-   title : 🍡 Article [Title]

    lines : |
        First line
        Second line
        ...
        
    links :
        Title : https://example.com/
```

<br>

> **Warning** Keep lines to 40 characters

> **Note** You can use **[Unicode]**, such  
> as **[Emoji]** to make things fancier.

<br>


<!----------------------------------------------------------------------------->

[Workflow]: #workflow
[Config]: #config
[Input]: #input

[Template]: ./Template.yaml
[Unicode]: https://unicode-table.com/en/
[Emoji]: https://unicode-table.com/en/emoji/

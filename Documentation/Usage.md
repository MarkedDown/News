

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

```yaml
-   name : Run News Builder
    uses : MarkedDown/News@1.0.0
    with :
        
        config : .github/.News.yml
```

> **Note** Adjust the action's version as well  
> as the location of the config as needed.

<br>

### Template

If you want a complete template, in case you for  
example want a workflow dedicated to building  
the news sections, use the following.

<kbd> <br> [Template Download][Template] <br> </kbd>

> **Note** Workflows are usually placed in   
> `/.github/workflows/<Workflow>.yml`

<br>
<br>

## Config

<br>
<br>

## Input

<br>


<!----------------------------------------------------------------------------->

[Workflow]: #workflow
[Config]: #config
[Input]: #input

[Template]: ./Template.yaml

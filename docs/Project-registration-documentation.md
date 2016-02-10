# Project registration documentation

## How to register a project

You can register a project in two ways:

1. Follow the instructions on the [README page](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/README.md) to open the [project_registration.html](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/project_registration.html) file locally, fill in a simple form, and have your project registered in your repository.

2. Manually create a JSON file inside the /projects folder of your repository.


## Structure of the JSON content

| Field name | Description | Required |
| ---------- | ----------- | -------- |
| project_name | Name of the project | Required |
| project_blurb | Brief description of the project (2 or 3 sentences) | Required |
| project_people | People involved in the project | Required |
| project_url | URL to the main online page for the project | Required |
| project_demo_url | URL to an example of this project implemented | Optional |
| project_thumbnail | URL to an image describing the project | Optional |

## Future JSON fields

To be implemented soon.

| Field name | Description |
| ---------- | ----------- |
| project_label | URL to an example of this project implemented |
| project_source_files_url | URL to the project source files (for example, source code) |
| project_license_type | Type of license |
| project_license_url | URL to the project license information |
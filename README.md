# README
The Projects repository for Open Innovation Network

Available at

http://openinnovationnetwork.github.io/Projects/

---

## Key Resources

### Project Template

A project template is available in https://docs.google.com/presentation/d/1Smi79L9L78V07MNZ6BkURArLeUubN4U0WKo8WmVGB8g/edit#slide=id.p

You should:

* Request authorization to the Google Drive folder
* Make a copy of the current template in the same Google Drive folder
* Fill out the template

---

## Instructions for this repository

### Fork the repo

Fork this repository in your github account.

Take a look at the URL generated and identify your repository's user and name.In this documentation, we will refer to them as REPO_USER and REPO_NAME, respectively.

>
> For example:
>
> http://github.com/OpenInnovationNetwork/Projects/
>
> REPO_USER = OpenInnovationNetwork
>
> REPO_NAME = Projects
>

### Set up your Project Gallery

#### 1. Access your current Gallery

The gallery is the [**index.html**](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/index.html) file in this repository.

Access the correspondent URL in your browser:
http://YOUR_REPO_USER.github.io/YOUR_REPO_NAME/

It is pulling data from the original repository, so it should look exactly like http://openinnovationnetwork.github.io/Projects/


#### 2. Modify your gallery to display your project's name

* Open your copy of the file [**index.html**](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/index.html)
* In [line 25](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/index.html#L25), replace YOUR_PROJECT_NAME with the name you want to appear in the top of the page. For example: "The Block App"
* Commit and push the changes to your repository
* Access your repo through its URL and check if your project's name is there.


#### 3. Modify your gallery to pull data from your repository

Currently, the projects that appear in your page are in the original repository.

* Open your copy of the file [**js/projects_retrieval.js**](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/js/projects_retrieval.js)
* In [line 12](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/js/projects_retrieval.js#L12), modify the content of the variable ```repository_user``` to contain your repository's user (YOUR_REPO_USER) inside quotation marks
* In [line 13](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/js/projects_retrieval.js#L13), modify the content of the variable ```repository_name``` to contain your repository's user (YOUR_REPO_NAME) inside quotation marks
* Commit and push the changes to your repository



### Add your project to your repository

#### Generate a github personal access token

* Go to your Github settings > Personal Access Tokens
* Generate a new token. Make sure you mark the "public_repo" option.
* Copy YOUR_PERSONAL_ACCESS_TOKEN somewhere safe.

If you have doubts, there are instructions on Github's website: https://github.com/blog/1509-personal-api-tokens

#### Run the project registration form

The project registration should be done in your local computer.

Up to now you could have done everything directly from Github's interface, but for this step you strictly need to clone your repository in your computer.

* Open your copy of the file [**project_registration.html**](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/project_registration.html)
* In [line 136](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/project_registration.html#L136), modify the content of the variable ```access_token``` to contain 
 YOUR_PERSONAL_ACCESS_TOKEN.
* In [line 137](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/project_registration.html#L137), modify the content of the variable ```repository_user``` to contain your repository's user (YOUR_REPO_USER) inside quotation marks
* In [line 138](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/project_registration.html#L138), modify the content of the variable ```repository_name``` to contain your repository's user (YOUR_REPO_NAME) inside quotation marks
* These changes should stay in your local computer. Do not push this file to your remote repository.


#### Submit your project

* Open your local copy of [**project_registration.html**](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/project_registration.html) in the browser
* Fill out the form and submit it to send your project's data directly to your remote repository.
  - It does that by creating a file inside the [**projects**](https://github.com/OpenInnovationNetwork/Projects/tree/gh-pages/projects) folder, containing your project's data formatted in JSON format.


#### Check your gallery

* Access your repository's url (http://YOUR_REPO_USER.github.io/YOUR_REPO_NAME/) and check how your project is displayed.


### Request to add your project to the original Project Gallery at Open Innovation Network.

* Submit a pull request with your project's JSON file (under directory /projects) to have your project displayed in http://github.com/OpenInnovationNetwork/Projects/





---





## License terms

See [LICENSE.md](https://github.com/OpenInnovationNetwork/Projects/blob/gh-pages/LICENSE.md)
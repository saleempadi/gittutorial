 HEAD
hello i am kavi
=======
This is a readme file
//Need help

git help <verb> , git <verb> --help , git add --help
git log
ls , ls -la (lists all the files in the directory)

git config --list 
git congig --global user.name "kiruthikajayagopal"
git config --global user.email "kiruthika.jayagopal@maplebots.com"

//initialize git

git init 

//add files to staging area

git add -A (or) git add file_name 
git status

//removing files from staging area

git reset file_name
git reset 

//commit

git commit -m "Initial commit"
git status
git log

//Clone a remote repository

git clone <url> <where to clone>
git clone../remote_repo.git.
git clone https://github.com/kiruthikajayagopal/remove_repo.git.

//viewing information about remote repository

git remote -v 
git branch -a

//pushing changes

git diff (says difference between old file and modified file)
git pull origin master
git push origin master


// 1. Create a branch 

git branch branch_name
git checkout branch_name

//2. commit

git commit -m "Initial commit"

//3. push branch to remote

git push -u origin branch_name
git branch -a
git pull
git push

//4. merge a branch with master

git checkout master
git pull origin master
git branch --merged
git merge branch_name
git push origin master

//5. deleting a branch

git branch --merged
git branch -d branch_name
git branch -a
git push origin --delete branch_name
cece8a5ada6af114940b8d96bc2818a537c374a4

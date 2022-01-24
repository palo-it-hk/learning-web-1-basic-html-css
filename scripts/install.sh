#!/bin/bash

# Install XCode tools
xcode-select --install

# Install and update Homebrew
BREWPATH=$(which brew);
[ ! $BREWPATH ] && /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew update

# Install VSCode if it's not already installed
CODEPATH=$(which code);
[ ! $CODEPATH ] && [ ! -d "/Applications/Visual Studio Code.app" ] && (brew install --cask visual-studio-code);

# Install Git if it's not already installed
GITPATH=$(which git);
[ ! $GITPATH ] && brew install git;

# Install Node if it's not already installed
NODEPATH=$(which node);
[ ! $NODEPATH ] && brew install node;

# Creating the working folders
LNLFOLDER=~/lunch-and-learn;
LEARNWEBFOLDER=$LNLFOLDER/learning-web;
BASICFOLDER=$LEARNWEBFOLDER/1-basic-html-css;

[ ! -d $LNLFOLDER ] && mkdir $LNLFOLDER
[ ! -d $LEARNWEBFOLDER ] && mkdir $LEARNWEBFOLDER

# Clone the git repository
ACCESS_TOKEN=$1;
[ ! -d ${BASICFOLDER} ] && git clone https://$ACCESS_TOKEN@github.com/palo-it-hk/learning-web-1-basic-html-css.git $BASICFOLDER
cd $BASICFOLDER;
git config user.name "palo-it-hk-playground";
git pull;

# Open VSCode with the project
code ~/lunch-and-learn/learning-web/1-basic-html-css

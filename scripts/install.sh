#!/bin/bash

exists()
{
  if command -v $1 &>/dev/null
  then
    return 0
  else
    return 1
    fi
}

# Install or update Homebrew
if exists brew
then
  echo 'HomeBrew already installed'
  brew upgrade
else
  echo 'Installing HomebBrew'
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# Install VSCode if it's not already installed
if exists code
then
  echo 'VSCode already installed'
else
  echo 'Installing VSCode'
  brew install --cask visual-studio-code;
fi

# Install Git if it's not already installed
if exists git
then
  echo 'Git already installed'
else
  echo 'Installing Git'
  brew install git;
fi

# Creating the working folders
LNLFOLDER=~/lunch-and-learn;
LEARNWEBFOLDER=$LNLFOLDER/learning-web;
BASICFOLDER=$LEARNWEBFOLDER/1-basic-html-css;

[ ! -d $LNLFOLDER ] && mkdir $LNLFOLDER
[ ! -d $LEARNWEBFOLDER ] && mkdir $LEARNWEBFOLDER

# Clone the git repository
ACCESS_TOKEN=$2;
USERNAME=$1;
[ ! -d ${BASICFOLDER} ] && git clone https://$ACCESS_TOKEN@github.com/palo-it-hk/learning-web-1-basic-html-css.git $BASICFOLDER
cd $BASICFOLDER;
git config pull.rebase true
git config user.name $USERNAME;
git pull;

# Open VSCode with the project
code ~/lunch-and-learn/learning-web/1-basic-html-css

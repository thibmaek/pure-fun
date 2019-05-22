workflow "Build & Publish" {
  resolves = ["Publish"]
  on = "push"
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

# Filter for master branch
action "Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

# Filter for a new tag
action "Tag" {
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "Publish" {
  needs = "Tag"
  uses = "actions/npm@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}

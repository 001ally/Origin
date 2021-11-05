const socialMediaLinks = {
  github: '001ally',
  youtube: 'UCmpAiuwp7G0QPYQKkPeI7rg',
  facebook: 'maykbrito',
  instagram: 'aliciapereira_0',
  twitter: '0petrashine'
}

function changingSocialMediaLinks() {
  //  userName.textContent = "Pedro"
  for (let li of socialMediaLks.children) {
    const social = li.getAttribute('class')
    // alert(social)
    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
    // alert(li.children[0].href)
  }
}
changingSocialMediaLinks()

function getGithubProfileInfos(params) {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`
  // alert(url);
  /* n precisa das chaves porque excecuta 
    somente uma "coisa" */
  fetch(url).then(response =>
    response.json().then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userLogin.textContent = data.login
      userLink.href = data.html_url
      profileImg.src = data.avatar_url
    })
  )
}
getGithubProfileInfos()

function getQueryVariable(variable){
  let query = window.location.search.substring(1)
  let params = query.split("&")
  for (let i = 0; i < params.length ; i++) {
    let pair = params[i].split("=")
    if (pair[0] == variable)
      return pair[1]
  }
  return false
}

AGE = getQueryVariable("age")
HOURS = getQueryVariable("hours")
STARTING_AGE = getQueryVariable("starting-age")

TECHNOLOGY = (AGE - STARTING_AGE) * 365 * HOURS
LIFETIME = AGE * 365 * 24

WASTED = TECHNOLOGY / LIFETIME * 100

OLD_AGE = 70
OLD_WASTED_HOURS = (OLD_AGE - STARTING_AGE) * 365 * HOURS
OLD_WASTED_YEARS = OLD_WASTED_HOURS / 24 / 365


document.querySelector('#life-wasted').innerText = Math.round(WASTED)
document.querySelector('#old-life-wasted-hours').innerText = Math.round(OLD_WASTED_HOURS)
document.querySelector('#old-life-wasted-years').innerText = Math.round(OLD_WASTED_YEARS)

//Tweet Button 

function tweet(){
  var url = 'https://twitter.com/intent/tweet';
  var website = 'http://howmuchtimehaveiwasted.com/'
  var text = "I've wasted " + WASTED +  " percent of my life in front of a screen."

  window.open(url+ "?text="+ text + ";url=" + website, '_blank', 'width=640,height=460','toolbar=no,menubar=no,scrollbars=no,location=no,status=no')
}

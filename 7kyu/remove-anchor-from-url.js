/* INSTRUCTIONS
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
*/

// MY SOLUTION
function removeUrlAnchor(url){
  if (url.includes('#')) {
    const indexOfAnchor = url.indexOf('#');
    return url.slice(0, indexOfAnchor);
  } else {
    return url;
  }
}

/*
Parameters: parameter is a url in the form of a string
Returns: return the parameter url as a string but omitting anything after and including the octothorp #
Example: 'www.myspace.com#contact-us' => 'www.myspace.com'
         'www.twitter.com?page=1' => 'www.twitter.com/page=1'
Pseudo Code:
Using string methods, we want to identify IF the string has #.
Conditional: if #, we need to grab the index of #
Once we have the index, we can use slice() method to remove all elements of the url string after and including #
*/

var topics = ["html","css","git","javascript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)]



    function listTopics()
{

    for (var x=0; x < topics.length ; x++){
        console.log (topics[x]) ;
    }
}
function selectTopic() {

    if (randomTopic === 'html') {
    console.log("Let's study html!");
    } else if (randomTopic === 'css') {
    console.log("Let's study css!");
    } else if (randomTopic === 'git') {
    console.log("Let's study git!");
    } else if (randomTopic === 'javaScript') {
    console.log("Let's study javaScript!");
    } else {
    console.log('Please try again!');
    }

}

console.log("This is what we learned so far");
listTopics();
console.log ("what to do first...");
selectTopic();


export class TweetService {
    getTweets() {
        return [
                {'author': 'No Person', 'username': '@NoPerson', 'tweetText': 'Not really a tweet or person', 'imgUrl': 'http://lorempixel.com/100/100/people?1'},
                {'author': 'Bob Person', 'username': '@Bobby258', 'tweetText': 'Just some random tweet that I\'m throwing out there', 'imgUrl': 'http://lorempixel.com/100/100/people?2'}
            ]
    }
}
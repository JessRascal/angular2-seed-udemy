export class TweetService {
    getTweets() {
        return [
                {
                imgUrl: 'http://lorempixel.com/100/100/people?1',
                author: 'No Person',
                username: '@NoPerson',
                tweetText: 'Not really a tweet or person.',
                totalLikes: 0,
                hasLiked: false
            },
            {
                imgUrl: 'http://lorempixel.com/100/100/people?2',
                author: 'Bob Person',
                username: '@Bobby258',
                tweetText: 'Just some random tweet that I\'m throwing out there.',
                totalLikes: 1,
                hasLiked: true
            },
            {
                imgUrl: 'http://lorempixel.com/100/100/people?3',
                author: 'Jess Rascal',
                username: '@JessRascal',
                tweetText: 'This stuff is tricky but I\'m getting there.',
                totalLikes: 1,
                hasLiked: true
            }
            ];
    }
}
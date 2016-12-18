var natural = require('natural');

var stemmer = natural.PorterStemmer;
var countInflector = natural.CountInflector;
var NGrams = natural.NGrams;
var Tagger = natural.BrillPOSTagger;

var myString = "I'm suprised! I didn't know you could make it.";
var myString2 = "I'm suprised! I didn't know you could make it.";

var tokenizer = new natural.TreebankWordTokenizer();
var nounInflector = new natural.NounInflector();

// tokenize by punctuation
console.log(tokenizer.tokenize(myString));

//  stem to find word root
console.log(stemmer.stem("bumming"));
console.log(stemmer.tokenizeAndStem(myString));

//  inflect to change plurality
console.log(nounInflector.pluralize("mouse"));
console.log(nounInflector.singularize("tomatoes"));

// create bi grqams and trigrams
console.log(NGrams.bigrams(myString));
console.log(NGrams.trigrams(myString));
//  ngram, with start and end [optional]
console.log(NGrams.ngrams(myString, 5, '[S]','[E]'));

// tagger takes array, (Itokenize, or split by spaces) - requires rules, lexicon, default rules
var baseFolder = "./node_modules/natural/lib/natural/brill_pos_tagger";
var rules = baseFolder + "/data/English/tr_from_posjs.txt";
var lexicon = baseFolder + "/data/English/lexicon_from_posjs.json";
var defaultCategory = 'N';

var tagger = new Tagger(lexicon, rules, defaultCategory, function(err){
      if(err){console.log(err);
      } else {console.log(tagger.tag(myString2.split(" ")));
      }
});

// coparing simularity between words.
// measuring string distance and simularity
// zero to one scale
// best for names, short words and deleting duplicates
natural.JaroWinklerDistance();
// number of edits needed to make the same
natural.LevenshteinDistance();
// 0.2 threshold bigram simularity of sets of letters
// = simular bigrams / total number of bigrams
natural.DiceCoefficient();

// naive bayes calssifier
// spam filter

var classifier = new natural.BayesClassifier();
// 60-80% in training data

// add training data into classifier
trainingData.forEach(function(item) {

});

classifier.train();
testData.forEach(function(item) {
  var labelGuess = classifier.classify(item.text);
  console.log(item.text);
  console.log("Label:", labelGuess);
  console.log(classifier.getClassifications(item.text)); // some inside scoop on what it picked up
});

// replace baysian with LogisticRegressionClassifier

// using tfIdf library to find most important words
// term frequrency - invesre document frequency
tfidf.listTerms(0).forEach(function(item){
    console.log(item.term, ":", item.tfIdf);
});

// wordnet files
// npm install wordnet
wordnet.lookup(myWord, function(results){
    results.forEach()
});

// trie structures
// is string contained in trie?
// does any in trie match prefix, or path

//  spell check
//  check if sound alike natural.SoundEx or natural.Metaphone

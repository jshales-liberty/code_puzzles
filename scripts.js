//Sum an array
function sum_array(a)
{var sum=0;
for (var i=0; i<a.length; i++)
{sum = sum + a[i];}
return sum;}
//console.log(sum_array([12,17,19991]));

//Increment an array
function increment_array(start, end, incr)
{var sum=0;
for (var i=start; i<=end; i=i+incr)
{sum = sum + i;}
return sum;}
//console.log(increment_array(1,33,1));

//MinMax an Array
function minmax_array(array){
var max_position = 0;
var min_position= 0;
for (var i=0; i<array.length; i++)
{if (array[i]>array[max_position])
{
  max_position = i;
}
if (array[i]<array[min_position])
{
  min_position = i;
}}
return [min_position, max_position];}
//console.log(minmax_array([127,8,16,1,2,21,22,1000 ]));

//Repeat String
function repeat_string(word, num){
var concat_word="";
for (var i=0; i<num; i++)
{concat_word = concat_word + word}
return concat_word;}
//console.log(repeat_string("apple",40));

//Factor an array
function factor(num){
var factors=[];
for (var i=2; i<num; i++)
{if (num%i == 0)
{factors.push(i)}}
return factors;}
//console.log(factor(12));

//Random Range
function random_range(num1, num2){
if (num1>num2)
{num2 = [num1, num1 = num2][0];}//Found on StackOverflow
return (num1 + (num2-num1)*Math.random());}
//console.log(random_range(2,1));

//Random array object
function random_array_obj(array){
return array[Math.floor((Math.random() * array.length))]}
//console.log(random_array_obj([1,2,3,4,5,6,7]));

//Count char in word
function count_string_for_char(string, char)
{
counter = 0
	for (i in string) 
	{if (string[i]===char)
		{counter++}	
}
return counter;}
console.log(count_string_for_char("testere","e"));


function count_string(string)
{
	dictionary = {}
	for (i in string) 
	{if (string[i] in dictionary)
		{dictionary[string[i]]++}
		else {dictionary[string[i]] = 1}}
	sorted_array = [];
	var highest = 0;
	for (i in dictionary)
	{if (i[0]>highest)
		{highest = i[0];}}
	popular = "";
	for (i in dictionary)
	{}
	
}
sorted_array.sort(function(a,b){a[0]-b[0]});
for (i in sorted_array)
//console.log(sorted_array[i]);
return sorted_array;
}
console.log(count_string("testere"));
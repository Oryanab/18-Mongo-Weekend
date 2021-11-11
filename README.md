# 18-Mongo-Weekend
## Topcis:

1. Creating Databases & Collections using mongoose
2. Create, Read, Update, Delete (CRUD) in MongoDB - Finding, Inserting, Deleting & Updating Elements
3. Data Types - An Overview
4. Query Selectors
5. Schemas

## Resources:

1. [Query Selectors & Projection Operators](https://docs.mongodb.com/manual/reference/operator/query/)
1. [Date types](https://docs.mongodb.com/manual/reference/bson-types/)

## Tools

- For a sense of true Database feel free to use
  [Faker](https://www.npmjs.com/package/faker)
- For learning Query Selectors & Projection Operators without the need for configuration you are welcome to use
  [Mongo playground](https://mongoplayground.net/)

![MongoDB](https://gocode.colorado.gov/wp-content/uploads/2020/11/MongoDB-sm-logo-500x400.gif)

## Task:

End product - Student information system database

- Connect to a running mongo instance, use a database named `mongo_practice`.
- Document all your queries in a javascript file to use as a reference.

### Insert Documents

Insert the following documents into a `students` collection:

```
name : Ido (String)
surName : Arbel (String)
birth : 26/01/1998 (Date)
phone : 0526305421 (String)
gender : Male (String)
courses : [
  Java,
  Math,
] (Array of string)
```

```
name : Chen (String)
surName : Halevi (String)
birth : 11/03/1997 (Date)
phone : 0526323421 (String)
gender : Male (String)
courses : [
  Math,
  Law
] (Array of string)
```

```
name : Koren (String)
surName : Gan-or (String)
birth : 19/01/1997 (Date)
phone : 0526305321 (String)
gender : Male (String)
courses : [
  JavaScript,
  Finance,
  Law
] (Array of string)
```

```
name : Oryan (String)
surName : Levy (String)
birth : 02/04/1998 (Date)
phone : 0542305321 (String)
gender : Male (String)
courses : [
  JavaScript,
  Law
] (Array of string)
```

```
name : Yahalom (String)
surName : Cohen (String)
birth : 03/11/1993 (Date)
phone : 0542305392 (String)
gender : Female (String)
courses : [
  Java,
  Law
] (Array of string)
```

## Query / Find Documents:

query the `students` collection to

- get all students
- get all students with name set to "Ido"
- get all students where courses include "Law"
- get all students where courses include "Java" and gender set to "Female"
- get all students where birth > 05/05/1998
- get all students where phone starts with 054
- get all students where phone starts with 054

## Update Documents

1. add a **JavaScript** course to the students where name set to "Yahalom"
2. update the **birth** to **02/12/1998** where name set to "Koren"

## Text Search

1. find all students that have a name that contains the letter "o"
2. find all students that have a surName that contains the letter "h" or "y"

## Delete Documents

1. delete the student where name set to "Ido"
1. delete the student where date set to "02/04/1998"

---

## Relationships

### Insert the following documents into a `users` collection

```
username : GoodGuyGreg
first_name : "Good Guy"
last_name : "Greg"

```

```
username : ScumbagSteve
full_name :
  first : "Scumbag"
  last : "Steve"

```

### Insert the following documents into a `posts` collection

```
username : GoodGuyGreg
title : Passes out at party
body : Wakes up early and cleans house
```

```
username : GoodGuyGreg
title : Steals your identity
body : Raises your credit score
```

```
username : GoodGuyGreg
title : Reports a bug in your code
body : Sends you a Pull Request
```

```
username : ScumbagSteve
title : Borrows something
body : Sells it
```

```
username : ScumbagSteve
title : Borrows everything
body : The end
```

```
username : ScumbagSteve
title : Forks your repo on github
body : Sets to private
```

### Insert the following documents into a `comments ` collection

```
username : GoodGuyGreg
comment : Hope you got a good deal!
post : [post_obj_id]
```

where [post_obj_id] is the ObjectId of the posts document: "Borrows something"

```
username : GoodGuyGreg
comment : What's mine is yours!
post : [post_obj_id]
```

where [post_obj_id] is the ObjectId of the posts document: "Borrows everything"

```
username : GoodGuyGreg
comment : Don't violate the licensing agreement!
post : [post_obj_id]
```

where [post_obj_id] is the ObjectId of the posts document: "Forks your repo on github

```
username : ScumbagSteve
comment : It still isn't clean
post : [post_obj_id]
```

where [post_obj_id] is the ObjectId of the posts document: "Passes out at party"

```
username : ScumbagSteve
comment : Denied your PR cause I found a hack
post : [post_obj_id]
```

where [post_obj_id] is the ObjectId of the posts document: "Reports a bug in your code"

## Querying related collections

- find all users
- find all posts
- find all posts that was authored by "GoodGuyGreg"
- find all posts that was authored by "ScumbagSteve"
- find all comments
- find all comments that was authored by "GoodGuyGreg"
- find all comments that was authored by "ScumbagSteve"
- find all comments belonging to the post "Reports a bug in your code"

## Bonus

End product - Job interview preparation questions system database

### Insert Documents

Insert the following documents into a `questions` collection:

```
title : What is nodejs (String)
correctAnswer : A JavaScript runtime environment (String)
answers : [
    A JavaScript runtime environment,
    A c# extension ,
    Irish children's story
    ](Array of String)
difficulty: 4 (Int)
```

```
title :  What is recursion in a programming language
correctAnswer : A technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result.
answers : [
    When a senior tells you to rewrite your function,
    A technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result ,
    When you get up in the morning and miraculously your bug is fixed
    ]
difficulty: 3
```

```
title :  What is DOM
correctAnswer : Document Object Model is a programming interface for HTML and XML documents
answers : [
    Done On Morning A technique to a healthy work life ,
    Document Object Maintain is a design pattern to save your front the correct way,
    Document Object Model is a programming interface for HTML and XML documents
    ]
difficulty: 7
```

```
title :  What is Object Destructuring
correctAnswer : A new way to extract elements from an object or an array.
answers : [
    A new way to extract elements from an object or an array ,
    A Memory Management feature that helps the garbage collector in js,
    Document Object Model is a programming interface for HTML and XML documents
    ]
difficulty: 8
```

##### feel free to add your own questions in here

---

### Please create a restful API where crud operations can be performed on the questions we entered.

#### The server will include the following end points:

1. GET /list - to **list** all the questions from our database
2. PUT /update - to **update** a question by its default id we got from `Mongo`
3. POST /create - to **create** a question
4. DELETE /remove/:id - to **delete** a question by its id
5. GET /read/by/difficulty/:difficulty - to **list** all question with that difficulty **or above**

### Clarifications:

1. No need to build a front-end. You may use `Postman`.
2. Validate incoming requests before sending them to mongoDB (For example - there is no reason to send an untitled question to Mongo)
3. Submit your repo to the classroom

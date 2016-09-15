var searchIndex = {};
searchIndex["tool"] = {"doc":"A grab-bag of functional tools.","items":[[5,"compose","tool","Compose two functions.",null,null],[5,"fix","","A Y-Combinator.",null,null],[5,"flip","","Flip the argument order of a two-parameter function.",null,null],[5,"first","","Get the first element of a sequence with at least one element.",null,{"inputs":[{"name":"p"}],"output":{"name":"first"}}],[5,"second","","Get the second element of a sequence with at least to elements",null,{"inputs":[{"name":"p"}],"output":{"name":"second"}}],[5,"third","","Get the third element of a sequence with at least three elements.",null,{"inputs":[{"name":"p"}],"output":{"name":"third"}}],[5,"uncons","","Split a sequence of at least one item into a head and tail.",null,null],[5,"empty","","True if the value is &quot;empty&quot;",null,{"inputs":[{"name":"t"}],"output":{"name":"bool"}}],[5,"non_empty","","False if the value is &quot;empty&quot;",null,{"inputs":[{"name":"t"}],"output":{"name":"bool"}}],[5,"ok","","Converts `Result`-like values into `Option`s.",null,{"inputs":[{"name":"r"}],"output":{"name":"option"}}],[5,"unwrap","","Unwraps the value.",null,{"inputs":[{"name":"u"}],"output":{"name":"value"}}],[5,"default","","Return a default value.",null,{"inputs":[],"output":{"name":"t"}}],[5,"id","","The identity function.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[0,"functor","","Higher-order functions (functions that operate on functions)",null,null],[5,"compose","tool::functor","Compose two functions.",null,null],[5,"flip","","Flip the argument order of a two-parameter function.",null,null],[5,"fix","","A Y-Combinator.",null,null],[0,"prelude","","Useful functions exported by `tool::functor`.",null,null],[5,"compose","tool::functor::prelude","Compose two functions.",null,null],[5,"fix","","A Y-Combinator.",null,null],[5,"flip","","Flip the argument order of a two-parameter function.",null,null],[0,"sequence","tool","A bunch of traits and functions for working with sequences.",null,null],[5,"first","tool::sequence","Get the first element of a sequence with at least one element.",null,{"inputs":[{"name":"p"}],"output":{"name":"first"}}],[5,"second","","Get the second element of a sequence with at least to elements",null,{"inputs":[{"name":"p"}],"output":{"name":"second"}}],[5,"third","","Get the third element of a sequence with at least three elements.",null,{"inputs":[{"name":"p"}],"output":{"name":"third"}}],[5,"uncons","","Split a sequence of at least one item into a head and tail.",null,null],[0,"prelude","","Useful functions exported by `tool::sequence`.",null,null],[5,"first","tool::sequence::prelude","Get the first element of a sequence with at least one element.",null,{"inputs":[{"name":"p"}],"output":{"name":"first"}}],[5,"second","","Get the second element of a sequence with at least to elements",null,{"inputs":[{"name":"p"}],"output":{"name":"second"}}],[5,"third","","Get the third element of a sequence with at least three elements.",null,{"inputs":[{"name":"p"}],"output":{"name":"third"}}],[5,"uncons","","Split a sequence of at least one item into a head and tail.",null,null],[8,"Empty","tool::sequence","A sequence with no items.",null,null],[8,"Singleton","","A sequence with one item.",null,null],[8,"Pair","","A sequence with two items.",null,null],[8,"Triple","","A sequence with three items.",null,null],[8,"First","","A sequence with a first item.",null,null],[16,"First","","",0,null],[10,"first","","",0,null],[8,"Second","","A sequence with a second item.",null,null],[16,"Second","","",1,null],[10,"second","","",1,null],[8,"Third","","A sequence with a third item.",null,null],[16,"Third","","",2,null],[10,"third","","",2,null],[8,"Cons","","A sequence that can be represented as a cons cell.",null,null],[16,"Head","","",3,null],[16,"Tail","","",3,null],[10,"uncons","","",3,null],[0,"empty","tool","Traits and functions for determining if some collection is empty.",null,null],[5,"empty","tool::empty","True if the value is &quot;empty&quot;",null,{"inputs":[{"name":"t"}],"output":{"name":"bool"}}],[5,"non_empty","","False if the value is &quot;empty&quot;",null,{"inputs":[{"name":"t"}],"output":{"name":"bool"}}],[0,"prelude","","Useful functions exported by `tool::empty`.",null,null],[5,"empty","tool::empty::prelude","True if the value is &quot;empty&quot;",null,{"inputs":[{"name":"t"}],"output":{"name":"bool"}}],[5,"non_empty","","False if the value is &quot;empty&quot;",null,{"inputs":[{"name":"t"}],"output":{"name":"bool"}}],[8,"IsEmpty","tool::empty","Things that can be &quot;is_empty&quot;.",null,null],[10,"is_empty","","",4,null],[0,"monad","tool","Useful traits and functions for working with monads (`Option`/`Result`).",null,null],[5,"ok","tool::monad","Converts `Result`-like values into `Option`s.",null,{"inputs":[{"name":"r"}],"output":{"name":"option"}}],[5,"unwrap","","Unwraps the value.",null,{"inputs":[{"name":"u"}],"output":{"name":"value"}}],[0,"prelude","","Useful functions exported by `tool::monad`.",null,null],[5,"ok","tool::monad::prelude","Converts `Result`-like values into `Option`s.",null,{"inputs":[{"name":"r"}],"output":{"name":"option"}}],[5,"unwrap","","Unwraps the value.",null,{"inputs":[{"name":"u"}],"output":{"name":"value"}}],[8,"Unwrap","tool::monad","Abstracts over unwrapping.",null,null],[16,"Value","","",5,null],[10,"unwrap","","",5,null],[8,"Ok","","Types of values that can be &quot;Ok&quot;.",null,null],[16,"Value","","",6,null],[10,"ok","","",6,null],[0,"misc","tool","Miscellaneous functions that don&#39;t really have a home.",null,null],[5,"id","tool::misc","The identity function.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"default","","Return a default value.",null,{"inputs":[],"output":{"name":"t"}}],[0,"prelude","tool","Useful functions to glob import.",null,null],[5,"compose","tool::prelude","Compose two functions.",null,null],[5,"fix","","A Y-Combinator.",null,null],[5,"flip","","Flip the argument order of a two-parameter function.",null,null],[5,"first","","Get the first element of a sequence with at least one element.",null,{"inputs":[{"name":"p"}],"output":{"name":"first"}}],[5,"second","","Get the second element of a sequence with at least to elements",null,{"inputs":[{"name":"p"}],"output":{"name":"second"}}],[5,"third","","Get the third element of a sequence with at least three elements.",null,{"inputs":[{"name":"p"}],"output":{"name":"third"}}],[5,"uncons","","Split a sequence of at least one item into a head and tail.",null,null],[5,"empty","","True if the value is &quot;empty&quot;",null,{"inputs":[{"name":"t"}],"output":{"name":"bool"}}],[5,"non_empty","","False if the value is &quot;empty&quot;",null,{"inputs":[{"name":"t"}],"output":{"name":"bool"}}],[5,"ok","","Converts `Result`-like values into `Option`s.",null,{"inputs":[{"name":"r"}],"output":{"name":"option"}}],[5,"unwrap","","Unwraps the value.",null,{"inputs":[{"name":"u"}],"output":{"name":"value"}}],[5,"default","","Return a default value.",null,{"inputs":[],"output":{"name":"t"}}],[5,"id","","The identity function.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}]],"paths":[[8,"First"],[8,"Second"],[8,"Third"],[8,"Cons"],[8,"IsEmpty"],[8,"Unwrap"],[8,"Ok"]]};
initSearch(searchIndex);

jQuery.pkg({
    require: 'http://cloud.github.com/downloads/rentzsch/JRSet.js/JRSet-1.0d1.pkg.js',
    init: function(){
        test('JRSet strings',function(){
            var set = new JRSet();
            
            equals(set.length(), 0);
            ok(!set.contains('1'), '[].contains("1")=>false');
            ok(!set.contains('2'), '[].contains("2")=>false');
            ok(!array_contains(set.toArray(), '1'));
            ok(!array_contains(set.toArray(), '2'));
            
            set.add('1');
            equals(set.length(), 1);
            ok(set.contains('1'));
            ok(!set.contains('2'));
            ok(array_contains(set.toArray(), '1'));
            ok(!array_contains(set.toArray(), '2'));
            
            set.add('1');
            equals(set.length(), 1);
            ok(set.contains('1'));
            ok(!set.contains('2'));
            ok(array_contains(set.toArray(), '1'));
            ok(!array_contains(set.toArray(), '2'));
            
            set.add('2');
            equals(set.length(), 2);
            ok(set.contains('1'), '["1","2"].contains("1")=>true');
            ok(set.contains('2'), '["1","2"].contains("2")=>true');
            ok(array_contains(set.toArray(), '1'), 'array_contains(["1","2"].toArray(),"1")=>true');
            ok(array_contains(set.toArray(), '2'), 'array_contains(["1","2"].toArray(),"2")=>true');
            
            set.remove('1');
            equals(set.length(), 1, '["2"].length()=>1');
            ok(!set.contains('1'), '["2"].contains("1")=>false');
            ok(set.contains('2'), '["2"].contains("2")=>true');
            ok(!array_contains(set.toArray(), '1'), 'array_contains(["2"].toArray(),"1")=>false');
            ok(array_contains(set.toArray(), '2'), 'array_contains(["2"].toArray(),"2")=>true');
            
            set.remove('1'); // should be a no-op now.
            equals(set.length(), 1, '["2"].length()=>1');
            ok(!set.contains('1'), '["2"].contains("1")=>false');
            ok(set.contains('2'), '["2"].contains("2")=>true');
            ok(!array_contains(set.toArray(), '1'), 'array_contains(["2"].toArray(),"1")=>false');
            ok(array_contains(set.toArray(), '2'), 'array_contains(["2"].toArray(),"2")=>true');
            
            set.remove('2');
            equals(set.length(), 0, '[].length()=>0');
            ok(!set.contains('1'), '[].contains("1")=>false');
            ok(!set.contains('2'), '[].contains("2")=>false');
            ok(!array_contains(set.toArray(), '1'), 'array_contains([].toArray(),"1")=>false');
            ok(!array_contains(set.toArray(), '2'), 'array_contains([].toArray(),"2")=>false');
        });
        test('JRSet objects',function(){
            var set = new JRSet(),
                o1 = {name:'o1'},
                o2 = {name:'o2'};
            
            equals(set.length(), 0);
            ok(!set.contains(o1), '[].contains(o1)=>false');
            ok(!set.contains(o2), '[].contains(o2)=>false');
            ok(!array_contains(set.toArray(), o1));
            ok(!array_contains(set.toArray(), o2));
            
            set.add(o1);
            equals(set.length(), 1);
            ok(set.contains(o1));
            ok(!set.contains(o2));
            ok(array_contains(set.toArray(), o1));
            ok(!array_contains(set.toArray(), o2));
            
            set.add(o1);
            equals(set.length(), 1);
            ok(set.contains(o1));
            ok(!set.contains(o2));
            ok(array_contains(set.toArray(), o1));
            ok(!array_contains(set.toArray(), o2));
            
            set.add(o2);
            equals(set.length(), 2);
            ok(set.contains(o1), '[o1,o2].contains(o1)=>true');
            ok(set.contains(o2), '[o1,o2].contains(o2)=>true');
            ok(array_contains(set.toArray(), o1), 'array_contains([o1,o2].toArray(),o1)=>true');
            ok(array_contains(set.toArray(), o2), 'array_contains([o1,o2].toArray(),o2)=>true');
            
            set.remove(o1);
            equals(set.length(), 1, '[o2].length()=>1');
            ok(!set.contains(o1), '[o2].contains(o1)=>false');
            ok(set.contains(o2), '[o2].contains(o2)=>true');
            ok(!array_contains(set.toArray(), o1), 'array_contains([o2].toArray(),o1)=>false');
            ok(array_contains(set.toArray(), o2), 'array_contains([o2].toArray(),o2)=>true');
            
            set.remove(o1); // should be a no-op now.
            equals(set.length(), 1, '[o2].length()=>1');
            ok(!set.contains(o1), '[o2].contains(o1)=>false');
            ok(set.contains(o2), '[o2].contains(o2)=>true');
            ok(!array_contains(set.toArray(), o1), 'array_contains([o2].toArray(),o1)=>false');
            ok(array_contains(set.toArray(), o2), 'array_contains([o2].toArray(),o2)=>true');
            
            set.remove(o2);
            equals(set.length(), 0, '[].length()=>0');
            ok(!set.contains(o1), '[].contains(o1)=>false');
            ok(!set.contains(o2), '[].contains(o2)=>false');
            ok(!array_contains(set.toArray(), o1), 'array_contains([].toArray(),o1)=>false');
            ok(!array_contains(set.toArray(), o2), 'array_contains([].toArray(),o2)=>false');
        });
        if(false)test('JRSet numbers',function(){
            // JRSet doesn't handle numbers, booleans or arrays (yet).
            var set = new JRSet();
            
            equals(set.length(), 0);
            ok(!set.contains(1), '[].contains(1)=>false');
            ok(!set.contains(2), '[].contains(2)=>false');
            ok(!array_contains(set.toArray(), 1));
            ok(!array_contains(set.toArray(), 2));
            
            set.add(1);
            equals(set.length(), 1);
            ok(set.contains(1));
            ok(!set.contains(2));
            ok(array_contains(set.toArray(), 1));
            ok(!array_contains(set.toArray(), 2));
            
            set.add(1);
            equals(set.length(), 1);
            ok(set.contains(1));
            ok(!set.contains(2));
            ok(array_contains(set.toArray(), 1));
            ok(!array_contains(set.toArray(), 2));
            
            set.add(2);
            equals(set.length(), 2);
            ok(set.contains(1), '[1,2].contains(1)=>true');
            ok(set.contains(2), '[1,2].contains(2)=>true');
            ok(array_contains(set.toArray(), 1), 'array_contains([1,2].toArray(),1)=>true');
            ok(array_contains(set.toArray(), 2), 'array_contains([1,2].toArray(),2)=>true');
            
            set.remove(1);
            equals(set.length(), 1, '[2].length()=>1');
            ok(!set.contains(1), '[2].contains(1)=>false');
            ok(set.contains(2), '[2].contains(2)=>true');
            ok(!array_contains(set.toArray(), 1), 'array_contains([2].toArray(),1)=>false');
            ok(array_contains(set.toArray(), 2), 'array_contains([2].toArray(),2)=>true');
            
            set.remove(1); // should be a no-op now.
            equals(set.length(), 1, '[2].length()=>1');
            ok(!set.contains(1), '[2].contains(1)=>false');
            ok(set.contains(2), '[2].contains(2)=>true');
            ok(!array_contains(set.toArray(), 1), 'array_contains([2].toArray(),1)=>false');
            ok(array_contains(set.toArray(), 2), 'array_contains([2].toArray(),2)=>true');
            
            set.remove(2);
            equals(set.length(), 0, '[].length()=>0');
            ok(!set.contains(1), '[].contains(1)=>false');
            ok(!set.contains(2), '[].contains(2)=>false');
            ok(!array_contains(set.toArray(), 1), 'array_contains([].toArray(),1)=>false');
            ok(!array_contains(set.toArray(), 2), 'array_contains([].toArray(),2)=>false');
        });
        test('JRSet functions',function(){
            var set = new JRSet(),
                f1 = function(){ return 1; },
                f2 = function(){ return 2; };
            
            equals(set.length(), 0);
            ok(!set.contains(f1), '[].contains(f1)=>false');
            ok(!set.contains(f2), '[].contains(f2)=>false');
            ok(!array_contains(set.toArray(), f1));
            ok(!array_contains(set.toArray(), f2));
            
            set.add(f1);
            equals(set.length(), 1);
            ok(set.contains(f1));
            ok(!set.contains(f2));
            ok(array_contains(set.toArray(), f1));
            ok(!array_contains(set.toArray(), f2));
            
            set.add(f1);
            equals(set.length(), 1);
            ok(set.contains(f1));
            ok(!set.contains(f2));
            ok(array_contains(set.toArray(), f1));
            ok(!array_contains(set.toArray(), f2));
            
            set.add(f2);
            equals(set.length(), 2);
            ok(set.contains(f1), '[f1,f2].contains(f1)=>true');
            ok(set.contains(f2), '[f1,f2].contains(f2)=>true');
            ok(array_contains(set.toArray(), f1), 'array_contains([f1,f2].toArray(),f1)=>true');
            ok(array_contains(set.toArray(), f2), 'array_contains([f1,f2].toArray(),f2)=>true');
            
            set.remove(f1);
            equals(set.length(), 1, '[f2].length()=>1');
            ok(!set.contains(f1), '[f2].contains(f1)=>false');
            ok(set.contains(f2), '[f2].contains(f2)=>true');
            ok(!array_contains(set.toArray(), f1), 'array_contains([f2].toArray(),f1)=>false');
            ok(array_contains(set.toArray(), f2), 'array_contains([f2].toArray(),f2)=>true');
            
            set.remove(f1); // should be a no-op now.
            equals(set.length(), 1, '[f2].length()=>1');
            ok(!set.contains(f1), '[f2].contains(f1)=>false');
            ok(set.contains(f2), '[f2].contains(f2)=>true');
            ok(!array_contains(set.toArray(), f1), 'array_contains([f2].toArray(),f1)=>false');
            ok(array_contains(set.toArray(), f2), 'array_contains([f2].toArray(),f2)=>true');
            
            set.remove(f2);
            equals(set.length(), 0, '[].length()=>0');
            ok(!set.contains(f1), '[].contains(f1)=>false');
            ok(!set.contains(f2), '[].contains(f2)=>false');
            ok(!array_contains(set.toArray(), f1), 'array_contains([].toArray(),f1)=>false');
            ok(!array_contains(set.toArray(), f2), 'array_contains([].toArray(),f2)=>false');
        });
    }
});

function array_contains(array, element) {
    var index = 0;
    for (; index < array.length; index++) {
        if (array[index] === element) {
            return true;
        }
    }
    return false;
}
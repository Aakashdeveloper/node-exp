exports.index = function(req, res){
  res.render('default', {
    title: 'HOME',
    classname: 'home',
    users :["a", "b", "c"]
      
    });
};

exports.about = function(req, res){
  res.render('default', {
    title: 'About Us',
    classname: 'about'
    });
 };

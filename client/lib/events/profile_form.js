 Template.profileForm.events({
 "submit form": function(e, template) {
   e.preventDefault();
   var inputs = template.findAll("input");
   Meteor.users.update(
    { _id: Meteor.userId() }, 
    { $set: 
      { "profile.name": inputs[0].value,
        "profile.about": inputs[1].value }
    });
	 var id = Meteor.userId();
	 console.log(id);
	 Session.set("editProfile", false);
  }
	 
  
});



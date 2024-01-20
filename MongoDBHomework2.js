
db.reactions.find(
{note:
{$lte: 4}
}
)

db.users.countDocuments(
{is_blocked:
{ $ne: true}
}
)


db.users.updateOne(
{_id: 1},
{$set:
{email: 'example123@hotmail.com'}
}
)

db.users.updateOne(
{_id: 2},
{$set:
{country: 'Brazil'}
}
)

db.users.updateMany(
{_id:
{ $in: [1 , 5 ] }
},
{$set:
{is_blocked: true}
}

)


db.users.updateMany(
{},
{$unset:
{is_blocked: true}
}

)

db.users.countDocuments(
{country: 'Germany', is_blocked:
{ $ne: true}
}
)

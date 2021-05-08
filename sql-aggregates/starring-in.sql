select "cat"."name" as "Category",
       count("a"."actorId") as "Films"
  from "categories" as "cat"
  join "filmCategory" as "fc" using ("categoryId")
  join "films" as "f" using ("filmId")
  join "castMembers" as "cm" using ("filmId")
  join "actors" as "a" using ("actorId")
  where "a"."firstName" = 'Lisa' AND "a"."lastName" = 'Monroe'
  group by "cat"."categoryId"

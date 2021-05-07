select "a"."line1",
       "cities"."name" as "city",
       "a"."district",
       "co"."name" as "country"
  from "addresses" as "a"
  join "cities" using ("cityId")
  join "countries" as "co" using ("countryId")

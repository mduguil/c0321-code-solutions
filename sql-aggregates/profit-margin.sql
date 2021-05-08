select "f"."title",
       sum("p"."amount") - "f"."replacementCost" as "Profit"
  from "films" as "f"
  join "inventory" as "i" using ("filmId")
  join "rentals" as "r" using ("inventoryId")
  join "payments" as "p" using ("rentalId")
  group by "filmId"
  order by "Profit" desc
  limit 5;

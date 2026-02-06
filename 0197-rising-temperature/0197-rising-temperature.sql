SELECT w.id
FROM Weather w
JOIN Weather ww
    ON w.recordDate = DATEADD(day, 1, ww.recordDate)
WHERE w.temperature > ww.temperature;

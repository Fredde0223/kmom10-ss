För att implementera realtidsaspekten på min sida valde jag att hela tiden uppdatera priserna på mina objekt. Jag gav helt enkelt att ge mina olika metaller godtyckliga priser som sedan i realtid fluktuerade och uppdaterades vid ett satt intervall.

Följande tekniker användes:

body-parser
cors
express
socket.io

Body parser är en middleware som tillåter att data hämtas ut via req.body.

Socket.io är bara modulen till serverdelen av socketen.

De andra två modulerna har jag redan beskrivit i min readme i api:et.

Jag tycker i slutändan att uppdateringen av priserna i realtid fungerar bra. Varje gång de uppdateras skickas de även in i api:et och allt fungerar som det ska. Det var lite svårt att få rätt på allt, speciellt ett bra sätt att göra socket.off för att inte skapa flera sockets. Jag valde att skicka med mina godtyckliga priser med en emit i min interall som en array och sedan tilldela dem till states i min app.

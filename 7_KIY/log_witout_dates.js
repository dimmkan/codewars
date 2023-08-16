/*
You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.

It is known that all events are recorded in chronological order and two events can't occur in the same second.

Return the minimum number of days during which the log is written.

Example:

Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
Output -> 1

Input -> ["12:12:12"]
Output -> 1

Input -> ["12:00:00", "23:59:59", "00:00:00"]
Output -> 2

Input -> []
Output -> 0
Good luck
*/


const testlog = ["19:27:44", // 1
"11:08:52", // 2
"04:55:03", // 3
"16:21:43", 
"06:40:48", // 4
"13:27:36",
"21:16:10",
"23:07:46",
"22:20:01", // 5
"20:10:27", // 6
"11:24:51", // 7
"10:02:58", // 8
"04:34:31", // 9
"08:21:44",
"23:30:09",
"19:12:56", // 10
"02:31:56", // 11
"13:07:52",
"23:59:16",
"08:10:42", // 12
"20:50:41",
"01:05:09", // 13
"15:32:21",
"05:29:54", // 14
"10:19:12",
"02:27:18", // 15
"17:52:27",
"15:45:07", // 16
"22:58:23",
"10:02:54", // 17
"10:56:38",
"10:33:25", // 18
"15:37:57",
"11:35:20", // 19
"13:00:06",
"21:57:23",
"08:09:53", // 20
"11:50:56", 
"05:29:02", // 21
"21:40:57",
"11:41:57", // 22
"03:15:59", // 23
"23:19:00", 
"17:45:04", // 24
"22:33:17",
"22:06:54", // 25
"07:50:05", // 26
"02:16:02", // 27
"08:53:09",
"14:43:38",
"23:28:29",
"04:46:25", // 28
"07:40:30",
"01:16:54", // 29
"19:04:55",
"01:08:02", // 30
"05:57:33",
"21:33:58",
"20:26:42", // 31
"12:40:47", // 32
"23:22:42",
"06:07:10", // 33
"20:16:53",
"00:04:44", // 34
"11:53:16",
"21:02:23",
"00:47:11", // 35
"01:30:10"]


function checkLogs(log) {
  if (log.length == 0) return 0
  if (log.length == 1) return 1
  
  let cnt = 1;
  log.reduce((acc, item) => {
    const h = item.split(':')[0];
    const m = item.split(':')[1];
    const s = item.split(':')[2];
    if (acc.split(':')[0] > h || (acc.split(':')[0] == h && m < acc.split(':')[1]) || (acc.split(':')[0] == h && m == acc.split(':')[1] && s <= acc.split(':')[2]) || acc == item) {
      cnt++
    }
    acc = item
    return acc
  },'');
  return cnt;
}


checkLogs(testlog);






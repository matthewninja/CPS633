from scapy.all import *
a = IP()
a.dst = "google.ca"
for i in range(1, 20):
  a.ttl = i
  b = ICMP()
  send(a/b)
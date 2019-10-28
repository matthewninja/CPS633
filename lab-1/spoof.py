from scapy.all import *
a = IP()
a.dst = "52.231.65.2"
a.src = "100.65.100.72"
b = ICMP()
p = a/b
send(p)
a.show()
ls(a)
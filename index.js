const ip6addr = require('@auriumdev/ip6addr');

const IPv4Range = ip6addr.createAddrRange('::ffff:0.0.0.0', '::ffff:255.255.255.255');

const IPv4C0 = ip6addr.createAddrRange('::ffff:0.0.0.0', '::ffff:0.255.255.255');
const IPv4C1 = ip6addr.createAddrRange('::ffff:10.0.0.0', '::ffff:10.255.255.255');
const IPv4C2 = ip6addr.createAddrRange('::ffff:100.64.0.0', '::ffff:100.127.255.255');
const IPv4C3 = ip6addr.createAddrRange('::ffff:127.0.0.0', '::ffff:127.255.255.255');
const IPv4C4 = ip6addr.createAddrRange('::ffff:169.254.0.0', '::ffff:169.254.255.255');
const IPv4C5 = ip6addr.createAddrRange('::ffff:172.16.0.0', '::ffff:172.31.255.255');
const IPv4C6 = ip6addr.createAddrRange('::ffff:192.0.0.0', '::ffff:192.0.0.255');
const IPv4C7 = ip6addr.createAddrRange('::ffff:192.0.2.0', '::ffff:192.0.2.255');
const IPv4C8 = ip6addr.createAddrRange('::ffff:192.88.99.0', '::ffff:192.88.99.255');
const IPv4C9 = ip6addr.createAddrRange('::ffff:192.168.0.0', '::ffff:192.168.255.255');
const IPv4C10 = ip6addr.createAddrRange('::ffff:198.18.0.0', '::ffff:198.19.255.255');
const IPv4C11 = ip6addr.createAddrRange('::ffff:198.51.100.0', '::ffff:198.51.100.255');
const IPv4C12 = ip6addr.createAddrRange('::ffff:203.0.113.0', '::ffff:203.0.113.255');
const IPv4C13 = ip6addr.createAddrRange('::ffff:224.0.0.0', '::ffff:239.255.255.255'); // Multicast Range
const IPv4C14 = ip6addr.createAddrRange('::ffff:240.0.0.0', '::ffff:255.255.255.255');

const IPv6C0 = ip6addr.createAddrRange('::', '::1');
const IPv6C1 = ip6addr.createAddrRange('64:ff9b::', '64:ff9b::ffff:ffff');
const IPv6C2 = ip6addr.createAddrRange('64:ff9b:1::', '64:ff9b:1:ffff:ffff:ffff:ffff:ffff');
const IPv6C3 = ip6addr.createAddrRange('100::', '100::ffff:ffff:ffff:ffff');
const IPv6C4 = ip6addr.createAddrRange('2001::', '2001:0:ffff:ffff:ffff:ffff:ffff:ffff');
const IPv6C5 = ip6addr.createAddrRange('2001:20::', '2001:2f:ffff:ffff:ffff:ffff:ffff:ffff');
const IPv6C6 = ip6addr.createAddrRange('2001:db8::', '2001:db8:ffff:ffff:ffff:ffff:ffff:ffff');
const IPv6C7 = ip6addr.createAddrRange('2002::', '2002:ffff:ffff:ffff:ffff:ffff:ffff:ffff');
const IPv6C8 = ip6addr.createAddrRange('fc00::', 'fdff:ffff:ffff:ffff:ffff:ffff:ffff:ffff');
const IPv6C9 = ip6addr.createAddrRange('fe80::', 'fe80::ffff:ffff:ffff:ffff');
const IPv6C10 = ip6addr.createAddrRange('ff00::', 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff'); // Mutlicast Range
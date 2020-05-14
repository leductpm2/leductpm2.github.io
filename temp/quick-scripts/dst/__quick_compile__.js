
(function () {
var scripts = [{"deps":{"./assets/Scripts/BulletMove":322,"./assets/Scripts/Explosion":319,"./assets/Scripts/Main":320,"./assets/Scripts/Player":318,"./assets/Scripts/socket.io":323,"./assets/Scripts/ActionUI":321,"./assets/Scripts/EnemyMove":317},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/SingleplayerScripts/ActionUI.js"},{"deps":{"./socket.io.js":6},"path":"preview-scripts/assets/Scripts/MultiplayerScript/Main.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/SingleplayerScripts/Explosion.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/SingleplayerScripts/BulletMove.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/SingleplayerScripts/EnemyMove.js"},{"deps":{"buffer":7},"path":"preview-scripts/assets/Scripts/MultiplayerScript/socket.io.js"},{"deps":{"base64-js":10,"ieee754":9,"isarray":8},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"randombytes":30,"randomfill":35,"pbkdf2":33,"create-hash":34,"diffie-hellman":32,"create-hmac":31,"browserify-sign/algos":72,"create-ecdh":36,"browserify-sign":74,"browserify-cipher":71,"public-encrypt":37},"path":"preview-scripts/__node_modules/crypto-browserify/index.js"},{"deps":{"events":17,"inherits":41,"readable-stream/readable.js":38,"readable-stream/writable.js":44,"readable-stream/duplex.js":45,"readable-stream/transform.js":42,"readable-stream/passthrough.js":43},"path":"preview-scripts/__node_modules/stream-browserify/index.js"},{"deps":{"../process/browser.js":11},"path":"preview-scripts/__node_modules/path-browserify/index.js"},{"deps":{"xtend":39,"builtin-status-codes":40,"./lib/request":24,"url":16,"./lib/response":26},"path":"preview-scripts/__node_modules/stream-http/index.js"},{"deps":{"./util":29,"punycode":27,"querystring":21},"path":"preview-scripts/__node_modules/url/url.js"},{"deps":{},"path":"preview-scripts/__node_modules/events/events.js"},{"deps":{"util/":49},"path":"preview-scripts/__node_modules/assert/assert.js"},{"deps":{"./support/isBuffer":28,"../process/browser.js":11,"inherits":46},"path":"preview-scripts/__node_modules/util/util.js"},{"deps":{},"path":"preview-scripts/__node_modules/tty-browserify/index.js"},{"deps":{"./decode":47,"./encode":48},"path":"preview-scripts/__node_modules/querystring-es3/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify/lib/_empty.js"},{"deps":{"http":15},"path":"preview-scripts/__node_modules/https-browserify/index.js"},{"deps":{"./capability":51,"./response":26,"../../process/browser.js":11,"buffer":7,"inherits":41,"readable-stream":38,"to-arraybuffer":55},"path":"preview-scripts/__node_modules/stream-http/lib/request.js"},{"deps":{"buffer":7},"path":"preview-scripts/__node_modules/string_decoder/index.js"},{"deps":{"./capability":51,"../../process/browser.js":11,"inherits":41,"buffer":7,"readable-stream":38},"path":"preview-scripts/__node_modules/stream-http/lib/response.js"},{"deps":{},"path":"preview-scripts/__node_modules/punycode/punycode.js"},{"deps":{},"path":"preview-scripts/__node_modules/util/support/isBufferBrowser.js"},{"deps":{},"path":"preview-scripts/__node_modules/url/util.js"},{"deps":{"../process/browser.js":11,"safe-buffer":73},"path":"preview-scripts/__node_modules/randombytes/browser.js"},{"deps":{"inherits":41,"safe-buffer":73,"./legacy":56,"create-hash/md5":69,"cipher-base":66,"sha.js":68,"ripemd160":67},"path":"preview-scripts/__node_modules/create-hmac/browser.js"},{"deps":{"./lib/primes.json":57,"buffer":7,"./lib/generatePrime":59,"./lib/dh":52},"path":"preview-scripts/__node_modules/diffie-hellman/browser.js"},{"deps":{"./lib/async":53,"./lib/sync":58},"path":"preview-scripts/__node_modules/pbkdf2/browser.js"},{"deps":{"inherits":41,"ripemd160":67,"sha.js":68,"cipher-base":66,"md5.js":70},"path":"preview-scripts/__node_modules/create-hash/browser.js"},{"deps":{"../process/browser.js":11,"safe-buffer":73,"randombytes":30},"path":"preview-scripts/__node_modules/randomfill/browser.js"},{"deps":{"buffer":7,"bn.js":77,"elliptic":76},"path":"preview-scripts/__node_modules/create-ecdh/browser.js"},{"deps":{"./publicEncrypt":61,"./privateDecrypt":60},"path":"preview-scripts/__node_modules/public-encrypt/browser.js"},{"deps":{"./lib/_stream_duplex.js":62,"./lib/_stream_transform.js":64,"./lib/_stream_passthrough.js":65,"./lib/_stream_writable.js":63,"./lib/_stream_readable.js":54},"path":"preview-scripts/__node_modules/readable-stream/readable-browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/xtend/immutable.js"},{"deps":{},"path":"preview-scripts/__node_modules/builtin-status-codes/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/inherits/inherits_browser.js"},{"deps":{"./readable":38},"path":"preview-scripts/__node_modules/readable-stream/transform.js"},{"deps":{"./readable":38},"path":"preview-scripts/__node_modules/readable-stream/passthrough.js"},{"deps":{"./lib/_stream_writable.js":63},"path":"preview-scripts/__node_modules/readable-stream/writable-browser.js"},{"deps":{"./lib/_stream_duplex.js":62},"path":"preview-scripts/__node_modules/readable-stream/duplex-browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/util/node_modules/inherits/inherits_browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/querystring-es3/decode.js"},{"deps":{},"path":"preview-scripts/__node_modules/querystring-es3/encode.js"},{"deps":{"./support/isBuffer":75,"../../../process/browser.js":11,"inherits":78},"path":"preview-scripts/__node_modules/assert/node_modules/util/util.js"},{"deps":{"_stream_transform":42,"util":19,"buffer":7,"../../process/browser.js":11,"./binding":109,"assert":18},"path":"preview-scripts/__node_modules/browserify-zlib/src/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/stream-http/lib/capability.js"},{"deps":{"./generatePrime":59,"buffer":7,"randombytes":30,"bn.js":77,"miller-rabin":103},"path":"preview-scripts/__node_modules/diffie-hellman/lib/dh.js"},{"deps":{"./sync":58,"../../process/browser.js":11,"./precondition":81,"./default-encoding":80,"safe-buffer":73},"path":"preview-scripts/__node_modules/pbkdf2/lib/async.js"},{"deps":{"events":17,"./_stream_duplex":62,"../../process/browser.js":11,"./internal/streams/stream":82,"inherits":41,"util":79,"process-nextick-args":86,"isarray":98,"safe-buffer":73,"core-util-is":97,"./internal/streams/BufferList":88,"./internal/streams/destroy":87,"string_decoder/":105},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_readable.js"},{"deps":{"buffer":7},"path":"preview-scripts/__node_modules/to-arraybuffer/index.js"},{"deps":{"inherits":41,"safe-buffer":73,"cipher-base":66},"path":"preview-scripts/__node_modules/create-hmac/legacy.js"},{"deps":{},"path":"preview-scripts/__node_modules/diffie-hellman/lib/primes.js"},{"deps":{"./precondition":81,"./default-encoding":80,"create-hash/md5":69,"ripemd160":67,"sha.js":68,"safe-buffer":73},"path":"preview-scripts/__node_modules/pbkdf2/lib/sync-browser.js"},{"deps":{"randombytes":30,"miller-rabin":103,"bn.js":77},"path":"preview-scripts/__node_modules/diffie-hellman/lib/generatePrime.js"},{"deps":{"./mgf":83,"./xor":84,"./withPublic":85,"bn.js":77,"create-hash":34,"safe-buffer":73,"browserify-rsa":129,"parse-asn1":95},"path":"preview-scripts/__node_modules/public-encrypt/privateDecrypt.js"},{"deps":{"./xor":84,"randombytes":30,"create-hash":34,"bn.js":77,"safe-buffer":73,"parse-asn1":95,"./mgf":83,"./withPublic":85,"browserify-rsa":129},"path":"preview-scripts/__node_modules/public-encrypt/publicEncrypt.js"},{"deps":{"./_stream_readable":54,"./_stream_writable":63,"inherits":41,"process-nextick-args":86,"core-util-is":97},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_duplex.js"},{"deps":{"./internal/streams/stream":82,"./internal/streams/destroy":87,"./_stream_duplex":62,"../../process/browser.js":11,"inherits":41,"util-deprecate":96,"process-nextick-args":86,"safe-buffer":73,"core-util-is":97},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_writable.js"},{"deps":{"./_stream_duplex":62,"inherits":41,"core-util-is":97},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_transform.js"},{"deps":{"./_stream_transform":64,"inherits":41,"core-util-is":97},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_passthrough.js"},{"deps":{"stream":13,"safe-buffer":73,"inherits":41,"string_decoder":25},"path":"preview-scripts/__node_modules/cipher-base/index.js"},{"deps":{"buffer":7,"inherits":41,"hash-base":104},"path":"preview-scripts/__node_modules/ripemd160/index.js"},{"deps":{"./sha1":92,"./sha224":94,"./sha256":89,"./sha384":90,"./sha512":91,"./sha":93},"path":"preview-scripts/__node_modules/sha.js/index.js"},{"deps":{"md5.js":70},"path":"preview-scripts/__node_modules/create-hash/md5.js"},{"deps":{"inherits":41,"safe-buffer":73,"hash-base":104},"path":"preview-scripts/__node_modules/md5.js/index.js"},{"deps":{"evp_bytestokey":110,"browserify-aes/browser":134,"browserify-des/modes":137,"browserify-des":133,"browserify-aes/modes":135},"path":"preview-scripts/__node_modules/browserify-cipher/browser.js"},{"deps":{"./browser/algorithms.json":113},"path":"preview-scripts/__node_modules/browserify-sign/algos.js"},{"deps":{"buffer":7},"path":"preview-scripts/__node_modules/safe-buffer/index.js"},{"deps":{"stream":13,"./algorithms.json":113,"buffer":7,"create-hash":34,"inherits":41,"./verify":114,"./sign":115},"path":"preview-scripts/__node_modules/browserify-sign/browser/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/assert/node_modules/util/support/isBufferBrowser.js"},{"deps":{"../package.json":106,"brorand":108,"./elliptic/utils":99,"./elliptic/curve":100,"./elliptic/curves":107,"./elliptic/ec":101,"./elliptic/eddsa":102},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic.js"},{"deps":{"buffer":79},"path":"preview-scripts/__node_modules/bn.js/lib/bn.js"},{"deps":{},"path":"preview-scripts/__node_modules/assert/node_modules/inherits/inherits_browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/browser-resolve/empty.js"},{"deps":{"../../process/browser.js":11},"path":"preview-scripts/__node_modules/pbkdf2/lib/default-encoding.js"},{"deps":{"../../is-buffer/index.js":111},"path":"preview-scripts/__node_modules/pbkdf2/lib/precondition.js"},{"deps":{"events":17},"path":"preview-scripts/__node_modules/readable-stream/lib/internal/streams/stream-browser.js"},{"deps":{"create-hash":34,"safe-buffer":73},"path":"preview-scripts/__node_modules/public-encrypt/mgf.js"},{"deps":{},"path":"preview-scripts/__node_modules/public-encrypt/xor.js"},{"deps":{"bn.js":77,"safe-buffer":73},"path":"preview-scripts/__node_modules/public-encrypt/withPublic.js"},{"deps":{"../process/browser.js":11},"path":"preview-scripts/__node_modules/process-nextick-args/index.js"},{"deps":{"process-nextick-args":86},"path":"preview-scripts/__node_modules/readable-stream/lib/internal/streams/destroy.js"},{"deps":{"util":79,"safe-buffer":73},"path":"preview-scripts/__node_modules/readable-stream/lib/internal/streams/BufferList.js"},{"deps":{"./hash":112,"inherits":41,"safe-buffer":73},"path":"preview-scripts/__node_modules/sha.js/sha256.js"},{"deps":{"./sha512":91,"./hash":112,"inherits":41,"safe-buffer":73},"path":"preview-scripts/__node_modules/sha.js/sha384.js"},{"deps":{"./hash":112,"inherits":41,"safe-buffer":73},"path":"preview-scripts/__node_modules/sha.js/sha512.js"},{"deps":{"./hash":112,"inherits":41,"safe-buffer":73},"path":"preview-scripts/__node_modules/sha.js/sha1.js"},{"deps":{"inherits":41,"safe-buffer":73,"./hash":112},"path":"preview-scripts/__node_modules/sha.js/sha.js"},{"deps":{"./sha256":89,"./hash":112,"inherits":41,"safe-buffer":73},"path":"preview-scripts/__node_modules/sha.js/sha224.js"},{"deps":{"./aesid.json":117,"pbkdf2":33,"safe-buffer":73,"browserify-aes":134,"./asn1":116,"./fixProc":118},"path":"preview-scripts/__node_modules/parse-asn1/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/util-deprecate/browser.js"},{"deps":{"../../is-buffer/index.js":111},"path":"preview-scripts/__node_modules/core-util-is/lib/util.js"},{"deps":{},"path":"preview-scripts/__node_modules/readable-stream/node_modules/isarray/index.js"},{"deps":{"bn.js":77,"minimalistic-assert":128,"minimalistic-crypto-utils":130},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/utils.js"},{"deps":{"./base":122,"./short":123,"./mont":120,"./edwards":125},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/curve/index.js"},{"deps":{"../utils":99,"../curves":107,"bn.js":77,"brorand":108,"./key":126,"./signature":124,"hmac-drbg":132},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/ec/index.js"},{"deps":{"../curves":107,"../utils":99,"./key":121,"./signature":127,"hash.js":131},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/eddsa/index.js"},{"deps":{"bn.js":77,"brorand":108},"path":"preview-scripts/__node_modules/miller-rabin/lib/mr.js"},{"deps":{"stream":13,"safe-buffer":73,"inherits":41},"path":"preview-scripts/__node_modules/hash-base/index.js"},{"deps":{"safe-buffer":73},"path":"preview-scripts/__node_modules/readable-stream/node_modules/string_decoder/lib/string_decoder.js"},{"deps":{},"path":"preview-scripts/__node_modules/elliptic/package.js"},{"deps":{"./curve":100,"./utils":99,"./precomputed/secp256k1":119,"hash.js":131},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/curves.js"},{"deps":{"crypto":79},"path":"preview-scripts/__node_modules/brorand/index.js"},{"deps":{"../../process/browser.js":11,"buffer":7,"pako/lib/zlib/zstream":145,"pako/lib/zlib/constants":147,"pako/lib/zlib/messages":146,"pako/lib/zlib/deflate.js":148,"pako/lib/zlib/inflate.js":139},"path":"preview-scripts/__node_modules/browserify-zlib/src/binding.js"},{"deps":{"safe-buffer":73,"md5.js":70},"path":"preview-scripts/__node_modules/evp_bytestokey/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/is-buffer/index.js"},{"deps":{"safe-buffer":73},"path":"preview-scripts/__node_modules/sha.js/hash.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-sign/browser/algorithms.js"},{"deps":{"buffer":7,"./curves.json":149,"bn.js":77,"elliptic":76,"parse-asn1":95},"path":"preview-scripts/__node_modules/browserify-sign/browser/verify.js"},{"deps":{"./curves.json":149,"buffer":7,"create-hmac":31,"elliptic":76,"bn.js":77,"parse-asn1":95,"browserify-rsa":129},"path":"preview-scripts/__node_modules/browserify-sign/browser/sign.js"},{"deps":{"./certificate":136,"asn1.js":144},"path":"preview-scripts/__node_modules/parse-asn1/asn1.js"},{"deps":{},"path":"preview-scripts/__node_modules/parse-asn1/aesid.js"},{"deps":{"safe-buffer":73,"evp_bytestokey":110,"browserify-aes":134},"path":"preview-scripts/__node_modules/parse-asn1/fixProc.js"},{"deps":{},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js"},{"deps":{"./base":122,"../utils":99,"bn.js":77,"inherits":41},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/curve/mont.js"},{"deps":{"../utils":99},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/eddsa/key.js"},{"deps":{"../utils":99,"bn.js":77},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/curve/base.js"},{"deps":{"../utils":99,"./base":122,"bn.js":77,"inherits":41},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/curve/short.js"},{"deps":{"../utils":99,"bn.js":77},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/ec/signature.js"},{"deps":{"../utils":99,"./base":122,"bn.js":77,"inherits":41},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/curve/edwards.js"},{"deps":{"../utils":99,"bn.js":77},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/ec/key.js"},{"deps":{"../utils":99,"bn.js":77},"path":"preview-scripts/__node_modules/elliptic/lib/elliptic/eddsa/signature.js"},{"deps":{},"path":"preview-scripts/__node_modules/minimalistic-assert/index.js"},{"deps":{"buffer":7,"bn.js":77,"randombytes":30},"path":"preview-scripts/__node_modules/browserify-rsa/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/minimalistic-crypto-utils/lib/utils.js"},{"deps":{"./hash/ripemd":142,"./hash/utils":138,"./hash/common":141,"./hash/hmac":143,"./hash/sha":140},"path":"preview-scripts/__node_modules/hash.js/lib/hash.js"},{"deps":{"hash.js":131,"minimalistic-crypto-utils":130,"minimalistic-assert":128},"path":"preview-scripts/__node_modules/hmac-drbg/lib/hmac-drbg.js"},{"deps":{"cipher-base":66,"inherits":41,"safe-buffer":73,"des.js":166},"path":"preview-scripts/__node_modules/browserify-des/index.js"},{"deps":{"./modes/list.json":168,"./decrypter":169,"./encrypter":170},"path":"preview-scripts/__node_modules/browserify-aes/browser.js"},{"deps":{"./ecb":167,"./list.json":168,"./cfb1":174,"./cfb8":172,"./ofb":173,"./cbc":171,"./ctr":176,"./cfb":175},"path":"preview-scripts/__node_modules/browserify-aes/modes/index.js"},{"deps":{"asn1.js":144},"path":"preview-scripts/__node_modules/parse-asn1/certificate.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-des/modes.js"},{"deps":{"minimalistic-assert":128,"inherits":41},"path":"preview-scripts/__node_modules/hash.js/lib/hash/utils.js"},{"deps":{"../utils/common":150,"./adler32":157,"./crc32":158,"./inffast":160,"./inftrees":159},"path":"preview-scripts/__node_modules/pako/lib/zlib/inflate.js"},{"deps":{"./sha/224":151,"./sha/384":163,"./sha/1":161,"./sha/256":162,"./sha/512":164},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha.js"},{"deps":{"./utils":138,"minimalistic-assert":128},"path":"preview-scripts/__node_modules/hash.js/lib/hash/common.js"},{"deps":{"./utils":138,"./common":141},"path":"preview-scripts/__node_modules/hash.js/lib/hash/ripemd.js"},{"deps":{"./utils":138,"minimalistic-assert":128},"path":"preview-scripts/__node_modules/hash.js/lib/hash/hmac.js"},{"deps":{"bn.js":77,"./asn1/constants":153,"./asn1/decoders":154,"./asn1/encoders":156,"./asn1/base":155,"./asn1/api":152},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1.js"},{"deps":{},"path":"preview-scripts/__node_modules/pako/lib/zlib/zstream.js"},{"deps":{},"path":"preview-scripts/__node_modules/pako/lib/zlib/messages.js"},{"deps":{},"path":"preview-scripts/__node_modules/pako/lib/zlib/constants.js"},{"deps":{"../utils/common":150,"./adler32":157,"./crc32":158,"./messages":146,"./trees":165},"path":"preview-scripts/__node_modules/pako/lib/zlib/deflate.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-sign/browser/curves.js"},{"deps":{},"path":"preview-scripts/__node_modules/pako/lib/utils/common.js"},{"deps":{"../utils":138,"./256":162},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha/224.js"},{"deps":{"../asn1":144,"inherits":41,"vm":178},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/api.js"},{"deps":{"./der":177},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/constants/index.js"},{"deps":{"./der":180,"./pem":179},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/decoders/index.js"},{"deps":{"./reporter":182,"./buffer":183,"./node":181},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/base/index.js"},{"deps":{"./der":184,"./pem":185},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/encoders/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/pako/lib/zlib/adler32.js"},{"deps":{},"path":"preview-scripts/__node_modules/pako/lib/zlib/crc32.js"},{"deps":{"../utils/common":150},"path":"preview-scripts/__node_modules/pako/lib/zlib/inftrees.js"},{"deps":{},"path":"preview-scripts/__node_modules/pako/lib/zlib/inffast.js"},{"deps":{"../utils":138,"../common":141,"./common":186},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha/1.js"},{"deps":{"../utils":138,"../common":141,"./common":186,"minimalistic-assert":128},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha/256.js"},{"deps":{"../utils":138,"./512":164},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha/384.js"},{"deps":{"../utils":138,"../common":141,"minimalistic-assert":128},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha/512.js"},{"deps":{"../utils/common":150},"path":"preview-scripts/__node_modules/pako/lib/zlib/trees.js"},{"deps":{"./des/utils":187,"./des/cipher":190,"./des/des":191,"./des/cbc":189,"./des/ede":188},"path":"preview-scripts/__node_modules/des.js/lib/des.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-aes/modes/ecb.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-aes/modes/list.js"},{"deps":{"./authCipher":195,"./modes":135,"./streamCipher":194,"./aes":196,"safe-buffer":73,"cipher-base":66,"evp_bytestokey":110,"inherits":41},"path":"preview-scripts/__node_modules/browserify-aes/decrypter.js"},{"deps":{"./modes":135,"safe-buffer":73,"cipher-base":66,"evp_bytestokey":110,"inherits":41,"./streamCipher":194,"./aes":196,"./authCipher":195},"path":"preview-scripts/__node_modules/browserify-aes/encrypter.js"},{"deps":{"buffer-xor":192},"path":"preview-scripts/__node_modules/browserify-aes/modes/cbc.js"},{"deps":{"safe-buffer":73},"path":"preview-scripts/__node_modules/browserify-aes/modes/cfb8.js"},{"deps":{"buffer":7,"buffer-xor":192},"path":"preview-scripts/__node_modules/browserify-aes/modes/ofb.js"},{"deps":{"safe-buffer":73},"path":"preview-scripts/__node_modules/browserify-aes/modes/cfb1.js"},{"deps":{"safe-buffer":73,"buffer-xor":192},"path":"preview-scripts/__node_modules/browserify-aes/modes/cfb.js"},{"deps":{"../incr32":197,"safe-buffer":73,"buffer-xor":192},"path":"preview-scripts/__node_modules/browserify-aes/modes/ctr.js"},{"deps":{"../constants":153},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/constants/der.js"},{"deps":{"indexof":193},"path":"preview-scripts/__node_modules/vm-browserify/index.js"},{"deps":{"buffer":7,"./der":180,"inherits":41},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/decoders/pem.js"},{"deps":{"../../asn1":144,"inherits":41},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/decoders/der.js"},{"deps":{"../base":155,"minimalistic-assert":128},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/base/node.js"},{"deps":{"inherits":41},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/base/reporter.js"},{"deps":{"../base":155,"buffer":7,"inherits":41},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/base/buffer.js"},{"deps":{"buffer":7,"../../asn1":144,"inherits":41},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/encoders/der.js"},{"deps":{"./der":184,"inherits":41},"path":"preview-scripts/__node_modules/asn1.js/lib/asn1/encoders/pem.js"},{"deps":{"../utils":138},"path":"preview-scripts/__node_modules/hash.js/lib/hash/sha/common.js"},{"deps":{},"path":"preview-scripts/__node_modules/des.js/lib/des/utils.js"},{"deps":{"./cipher":190,"./des":191,"minimalistic-assert":128,"inherits":41},"path":"preview-scripts/__node_modules/des.js/lib/des/ede.js"},{"deps":{"minimalistic-assert":128,"inherits":41},"path":"preview-scripts/__node_modules/des.js/lib/des/cbc.js"},{"deps":{"minimalistic-assert":128},"path":"preview-scripts/__node_modules/des.js/lib/des/cipher.js"},{"deps":{"./utils":187,"./cipher":190,"minimalistic-assert":128,"inherits":41},"path":"preview-scripts/__node_modules/des.js/lib/des/des.js"},{"deps":{"buffer":7},"path":"preview-scripts/__node_modules/buffer-xor/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/indexof/index.js"},{"deps":{"./aes":196,"cipher-base":66,"safe-buffer":73,"inherits":41},"path":"preview-scripts/__node_modules/browserify-aes/streamCipher.js"},{"deps":{"./aes":196,"./incr32":197,"safe-buffer":73,"cipher-base":66,"inherits":41,"buffer-xor":192,"./ghash":198},"path":"preview-scripts/__node_modules/browserify-aes/authCipher.js"},{"deps":{"safe-buffer":73},"path":"preview-scripts/__node_modules/browserify-aes/aes.js"},{"deps":{},"path":"preview-scripts/__node_modules/browserify-aes/incr32.js"},{"deps":{"safe-buffer":73},"path":"preview-scripts/__node_modules/browserify-aes/ghash.js"},{"deps":{"./lib/chai":204},"path":"preview-scripts/__node_modules/chai/index.js"},{"deps":{"./bom-handling":206,"../../process/browser.js":11,"buffer":7,"./streams":208,"./extend-node":207,"../encodings":205},"path":"preview-scripts/__node_modules/iconv-lite/lib/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ipaddr.js/lib/ipaddr.js"},{"deps":{"../../process/browser.js":11,"./common":209},"path":"preview-scripts/__node_modules/debug/src/browser.js"},{"deps":{"path":14,"fs":22,"./types.json":210,"../process/browser.js":11},"path":"preview-scripts/__node_modules/mime/mime.js"},{"deps":{"./chai/interface/expect":211,"./chai/config":212,"./chai/core/assertions":213,"./chai/interface/should":214,"./chai/interface/assert":215,"assertion-error":217,"./chai/assertion":216,"./chai/utils":226},"path":"preview-scripts/__node_modules/chai/lib/chai.js"},{"deps":{"./sbcs-data":222,"./sbcs-data-generated":224,"./internal":218,"./utf16":220,"./utf7":221,"./sbcs-codec":219,"./dbcs-codec":225,"./dbcs-data":223},"path":"preview-scripts/__node_modules/iconv-lite/encodings/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/iconv-lite/lib/bom-handling.js"},{"deps":{"buffer":7,"stream":13},"path":"preview-scripts/__node_modules/iconv-lite/lib/extend-node.js"},{"deps":{"stream":13,"buffer":7},"path":"preview-scripts/__node_modules/iconv-lite/lib/streams.js"},{"deps":{"ms":232},"path":"preview-scripts/__node_modules/debug/src/common.js"},{"deps":{},"path":"preview-scripts/__node_modules/mime/types.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/interface/expect.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/config.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/core/assertions.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/interface/should.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/interface/assert.js"},{"deps":{"./config":212},"path":"preview-scripts/__node_modules/chai/lib/chai/assertion.js"},{"deps":{},"path":"preview-scripts/__node_modules/assertion-error/index.js"},{"deps":{"string_decoder":25,"buffer":7},"path":"preview-scripts/__node_modules/iconv-lite/encodings/internal.js"},{"deps":{"buffer":7},"path":"preview-scripts/__node_modules/iconv-lite/encodings/sbcs-codec.js"},{"deps":{"buffer":7},"path":"preview-scripts/__node_modules/iconv-lite/encodings/utf16.js"},{"deps":{"buffer":7},"path":"preview-scripts/__node_modules/iconv-lite/encodings/utf7.js"},{"deps":{},"path":"preview-scripts/__node_modules/iconv-lite/encodings/sbcs-data.js"},{"deps":{"./tables/shiftjis.json":234,"./tables/eucjp.json":239,"./tables/cp936.json":240,"./tables/gbk-added.json":237,"./tables/gb18030-ranges.json":238,"./tables/cp949.json":241,"./tables/cp950.json":243,"./tables/big5-added.json":242},"path":"preview-scripts/__node_modules/iconv-lite/encodings/dbcs-data.js"},{"deps":{},"path":"preview-scripts/__node_modules/iconv-lite/encodings/sbcs-data-generated.js"},{"deps":{"buffer":7},"path":"preview-scripts/__node_modules/iconv-lite/encodings/dbcs-codec.js"},{"deps":{"./flag":245,"./transferFlags":249,"./getName":251,"./overwriteProperty":254,"./overwriteMethod":256,"./overwriteChainableMethod":258,"./getActual":259,"./test":244,"./objDisplay":246,"./getPathValue":248,"./getPathInfo":250,"./addProperty":252,"./addMethod":253,"./addChainableMethod":257,"./getMessage":260,"./hasProperty":255,"./expectTypes":261,"./inspect":247,"type-detect":263,"deep-eql":262},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/array-flatten/array-flatten.js"},{"deps":{"./formats":264,"./stringify":265,"./parse":266},"path":"preview-scripts/__node_modules/qs/lib/index.js"},{"deps":{"buffer":7,"../process/browser.js":11},"path":"preview-scripts/__node_modules/safer-buffer/safer.js"},{"deps":{"engine.io-parser":231,"./socket":268},"path":"preview-scripts/__node_modules/engine.io-client/lib/index.js"},{"deps":{"base64-arraybuffer":235,"./keys":267,"./utf8":269,"arraybuffer.slice":270,"after":272,"blob":273,"has-binary2":271},"path":"preview-scripts/__node_modules/engine.io-parser/lib/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/ms/index.js"},{"deps":{"buffer":7,"crypto":12},"path":"preview-scripts/__node_modules/base64id/lib/base64id.js"},{"deps":{},"path":"preview-scripts/__node_modules/iconv-lite/encodings/tables/shiftjis.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-arraybuffer/lib/base64-arraybuffer.js"},{"deps":{"http":15,"./socket":276,"./transport":275,"engine.io-parser":231,"./transports":277,"./server":274},"path":"preview-scripts/__node_modules/engine.io/lib/engine.io.js"},{"deps":{},"path":"preview-scripts/__node_modules/iconv-lite/encodings/tables/gbk-added.js"},{"deps":{},"path":"preview-scripts/__node_modules/iconv-lite/encodings/tables/gb18030-ranges.js"},{"deps":{},"path":"preview-scripts/__node_modules/iconv-lite/encodings/tables/eucjp.js"},{"deps":{},"path":"preview-scripts/__node_modules/iconv-lite/encodings/tables/cp936.js"},{"deps":{},"path":"preview-scripts/__node_modules/iconv-lite/encodings/tables/cp949.js"},{"deps":{},"path":"preview-scripts/__node_modules/iconv-lite/encodings/tables/big5-added.js"},{"deps":{},"path":"preview-scripts/__node_modules/iconv-lite/encodings/tables/cp950.js"},{"deps":{"./flag":245},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/test.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/flag.js"},{"deps":{"./inspect":247,"../config":212},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/objDisplay.js"},{"deps":{"./getName":251,"./getEnumerableProperties":278,"./getProperties":279},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/inspect.js"},{"deps":{"./getPathInfo":250},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/getPathValue.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/transferFlags.js"},{"deps":{"./hasProperty":255},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/getPathInfo.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/getName.js"},{"deps":{"../config":212,"./flag":245},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/addProperty.js"},{"deps":{"../config":212,"./flag":245},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/addMethod.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/overwriteProperty.js"},{"deps":{"type-detect":263},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/hasProperty.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/overwriteMethod.js"},{"deps":{"./transferFlags":249,"../config":212,"./flag":245},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/addChainableMethod.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/overwriteChainableMethod.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/getActual.js"},{"deps":{"./flag":245,"./getActual":259,"./inspect":247,"./objDisplay":246},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/getMessage.js"},{"deps":{"./flag":245,"assertion-error":217,"type-detect":263},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/expectTypes.js"},{"deps":{"./lib/eql":281},"path":"preview-scripts/__node_modules/deep-eql/index.js"},{"deps":{"./lib/type":280},"path":"preview-scripts/__node_modules/type-detect/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/qs/lib/formats.js"},{"deps":{"./utils":282,"./formats":264},"path":"preview-scripts/__node_modules/qs/lib/stringify.js"},{"deps":{"./utils":282},"path":"preview-scripts/__node_modules/qs/lib/parse.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/keys.js"},{"deps":{"debug":202,"indexof":193,"engine.io-parser":231,"component-emitter":289,"parseqs":287,"parseuri":288,"./transport":284,"./transports/index":283},"path":"preview-scripts/__node_modules/engine.io-client/lib/socket.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/utf8.js"},{"deps":{},"path":"preview-scripts/__node_modules/arraybuffer.slice/index.js"},{"deps":{"buffer":7,"isarray":290},"path":"preview-scripts/__node_modules/has-binary2/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/after/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/blob/index.js"},{"deps":{"querystring":21,"url":16,"./transports":277,"events":17,"./socket":276,"../../process/browser.js":11,"buffer":7,"util":19,"debug":202,"cookie":294,"ws":295,"base64id":233},"path":"preview-scripts/__node_modules/engine.io/lib/server.js"},{"deps":{"events":17,"engine.io-parser":231,"debug":202,"util":19},"path":"preview-scripts/__node_modules/engine.io/lib/transport.js"},{"deps":{"events":17,"../../process/browser.js":11,"util":19,"debug":202},"path":"preview-scripts/__node_modules/engine.io/lib/socket.js"},{"deps":{"./polling-jsonp":292,"./websocket":293,"./polling-xhr":291},"path":"preview-scripts/__node_modules/engine.io/lib/transports/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/getEnumerableProperties.js"},{"deps":{},"path":"preview-scripts/__node_modules/chai/lib/chai/utils/getProperties.js"},{"deps":{},"path":"preview-scripts/__node_modules/type-detect/lib/type.js"},{"deps":{"buffer":7,"type-detect":300},"path":"preview-scripts/__node_modules/deep-eql/lib/eql.js"},{"deps":{},"path":"preview-scripts/__node_modules/qs/lib/utils.js"},{"deps":{"./polling-xhr":299,"xmlhttprequest-ssl":296,"./websocket":297,"./polling-jsonp":298},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/index.js"},{"deps":{"engine.io-parser":231,"component-emitter":289},"path":"preview-scripts/__node_modules/engine.io-client/lib/transport.js"},{"deps":{"fs":22,"url":16,"child_process":22,"http":15,"https":23,"../../process/browser.js":11,"buffer":7},"path":"preview-scripts/__node_modules/xmlhttprequest-ssl/lib/XMLHttpRequest.js"},{"deps":{},"path":"preview-scripts/__node_modules/supports-color/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseqs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseuri/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/component-emitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-binary2/node_modules/isarray/index.js"},{"deps":{"util":19,"./polling":301},"path":"preview-scripts/__node_modules/engine.io/lib/transports/polling-xhr.js"},{"deps":{"./polling":301,"querystring":21,"util":19},"path":"preview-scripts/__node_modules/engine.io/lib/transports/polling-jsonp.js"},{"deps":{"../transport":275,"util":19,"buffer":7,"engine.io-parser":231,"debug":202},"path":"preview-scripts/__node_modules/engine.io/lib/transports/websocket.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io/node_modules/cookie/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ws/browser.js"},{"deps":{"has-cors":304},"path":"preview-scripts/__node_modules/engine.io-client/lib/xmlhttprequest.js"},{"deps":{"../transport":284,"buffer":7,"engine.io-parser":231,"parseqs":287,"debug":202,"ws":79,"component-inherit":305,"yeast":306},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/websocket.js"},{"deps":{"component-inherit":305,"./polling":303},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-jsonp.js"},{"deps":{"xmlhttprequest-ssl":296,"./polling":303,"component-emitter":289,"debug":202,"component-inherit":305},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-xhr.js"},{"deps":{"./lib/type":302},"path":"preview-scripts/__node_modules/deep-eql/node_modules/type-detect/index.js"},{"deps":{"../transport":275,"util":19,"buffer":7,"engine.io-parser":231,"debug":202,"zlib":50,"accepts":307},"path":"preview-scripts/__node_modules/engine.io/lib/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/deep-eql/node_modules/type-detect/lib/type.js"},{"deps":{"../transport":284,"xmlhttprequest-ssl":296,"parseqs":287,"engine.io-parser":231,"component-inherit":305,"yeast":306,"debug":202},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-cors/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-inherit/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/yeast/index.js"},{"deps":{"negotiator":308,"mime-types":309},"path":"preview-scripts/__node_modules/accepts/index.js"},{"deps":{"./lib/encoding":310,"./lib/language":311,"./lib/mediaType":312,"./lib/charset":313},"path":"preview-scripts/__node_modules/negotiator/index.js"},{"deps":{"path":14,"mime-db":314},"path":"preview-scripts/__node_modules/mime-types/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/negotiator/lib/encoding.js"},{"deps":{},"path":"preview-scripts/__node_modules/negotiator/lib/language.js"},{"deps":{},"path":"preview-scripts/__node_modules/negotiator/lib/mediaType.js"},{"deps":{},"path":"preview-scripts/__node_modules/negotiator/lib/charset.js"},{"deps":{"./db.json":315},"path":"preview-scripts/__node_modules/mime-db/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/mime-db/db.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/package.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/EnemyMove.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Player.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Explosion.js"},{"deps":{"./socket.io.js":323},"path":"preview-scripts/assets/Scripts/Main.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/ActionUI.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/BulletMove.js"},{"deps":{"buffer":7},"path":"preview-scripts/assets/Scripts/socket.io.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }
                console.time && console.time('eval __quick_compile_project__');
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd('eval __quick_compile_project__');
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    
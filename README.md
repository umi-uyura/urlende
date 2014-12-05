urlende - URL encode & decode command
=====================================

Install
-------

```
$ git clone https://github.com:
$ [sudo] npm install -g ./urlende
```

Usage
-----

### URL encode

```
$ urlende -e 'http://example.com/日本語のユーアールエル'
http://example.com/%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%AE%E3%83%A6%E3%83%BC%E3%82%A2%E3%83%BC%E3%83%AB%E3%82%A8%E3%83%AB
```

### URL decode

```
$ urlende -d 'http://example.com/%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%AE%E3%83%A6%E3%83%BC%E3%82%A2%E3%83%BC%E3%83%AB%E3%82%A8%E3%83%AB'
http://example.com/日本語のユーアールエル
```

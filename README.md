build
```bash
docker build . -t ctnelson1997/cs571-su24-hw3-api
docker push ctnelson1997/cs571-su24-hw3-api
```

run
```bash
docker pull ctnelson1997/cs571-su24-hw3-api
docker run --name=cs571_su24_hw3_api -d --restart=always -p 38103:38103 -v /cs571/su24/hw3:/cs571 ctnelson1997/cs571-su24-hw3-api
```
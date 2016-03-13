# Stock News

This is a applications to display the latest news based on a searched stock index.

Features:

* Requests to port `http://<ip>:3000/` to get access the web application.
* Integrated with gmail OAUTH2 for authentication. 
* Once a valid stock index is entered, application gets the details of the stock from `http://articlefeeds.nasdaq.com/`

Walkthrough Gif:
[Add walkthrough.gif to the project root]

![Video Walkthrough](walkthrough.gif)

Note: to embed the gif file, just check your gif file into your repo and update the name of the file above.

## Starting the Server

```bash
npm start
```

## Webservice call

Same functionality can be achieved by calling REST Webservice

`http://<ip>:3000/stock/<stock index>`

Example

```bash

curl -v -X GET http://localhost:3000/stock/AAPL
*   Trying ::1...
* Connected to localhost (::1) port 3000 (#0)
> GET /stock/AAPL HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/xml; charset=utf-8
< Content-Length: 35237
< ETag: W/"89a5-vLdog/z/PpsTKfhnyd9C1w"
< Date: Sun, 13 Mar 2016 10:15:59 GMT
< Connection: keep-alive
<
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;?xml-stylesheet type=&quot;text/xsl&quot; media=&quot;screen&quot; href=&quot;/~d/styles/rss2full.xsl&quot;?&gt;&lt;?xml-stylesheet type=&quot;text/css&quot; media=&quot;screen&quot; href=&quot;http://articlefeeds.nasdaq.com/~d/styles/itemcontent.css&quot;?&gt;&lt;rss xmlns:a10=&quot;http://www.w3.org/2005/Atom&quot; xmlns:feedburner=&quot;http://rssnamespace.org/feedburner/ext/1.0&quot; version=&quot;2.0&quot;&gt;
  &lt;channel xmlns:nasdaq=&quot;http://nasdaq.com/reference/feeds/1.0/&quot;&gt;
    &lt;title&gt;Latest Articles&lt;/title&gt;
    &lt;description /&gt;
    &lt;language&gt;EN-US&lt;/language&gt;
    &lt;lastBuildDate&gt;Sun, 13 Mar 2016 06:13:00 -0400&lt;/lastBuildDate&gt;
    &lt;atom10:link xmlns:atom10=&quot;http://www.w3.org/2005/Atom&quot; rel=&quot;self&quot; type=&quot;application/rss+xml&quot; href=&quot;http://articlefeeds.nasdaq.com/nasdaq/symbols?symbol=AAPL&quot; /&gt;&lt;feedburner:info uri=&quot;nasdaq/symbols&quot; /&gt;&lt;atom10:link xmlns:atom10=&quot;http://www.w3.org/2005/Atom&quot; rel=&quot;hub&quot; href=&quot;http://pubsubhubbub.appspot.com/&quot; /&gt;&lt;item xml:base=&quot;http://www.nasdaq.com/article/samsung-is-catching-up-to-apple-tv-cm592398&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592398&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/_oHnmMnsYHY/samsung-is-catching-up-to-apple-tv-cm592398&lt;/link&gt;
      &lt;title&gt;Samsung Is Catching Up to Apple TV&lt;/title&gt;
      &lt;description&gt;A Samsung curved TV. Image source  Samsung  If you bought a new TV recently, there&apos;s a good chance it was made by Samsung . The Korean tech giant dominates the market&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/_oHnmMnsYHY&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Sat, 12 Mar 2016 17:39:59 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-12T17:39:59Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/samsung-is-catching-up-to-apple-tv-cm592398&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/what-does-bullish-mean-in-stock-trading-cm592392&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592392&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/vg418-BX9m0/what-does-bullish-mean-in-stock-trading-cm592392&lt;/link&gt;
      &lt;title&gt;What Does &amp;amp;quot;Bullish&amp;amp;quot; Mean in Stock Trading?&lt;/title&gt;
      &lt;description&gt;Photo  Flickr  James Manners.  Simply put, &quot;bullish&quot; means that an investor believes that a stock or the overall market will go higher, and &quot;bearish&quot; means that an investor believes a&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/vg418-BX9m0&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Sat, 12 Mar 2016 16:44:25 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-12T16:44:25Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/what-does-bullish-mean-in-stock-trading-cm592392&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/is-fitbit-inc-stock-finding-its-stride-after-horrific-start-in-the-markets-fit-cm592333&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592333&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/vDBnmAl_D9U/is-fitbit-inc-stock-finding-its-stride-after-horrific-start-in-the-markets-fit-cm592333&lt;/link&gt;
      &lt;title&gt;Is Fitbit Inc Stock Finding Its Stride After Horrific Start in the Markets? (FIT)&lt;/title&gt;
      &lt;description&gt;InvestorPlaceInvestorPlace   Stock Market News, Stock Advice &amp;amp; Trading Tips  It has been a sorry introduction into Wall Street for Fitbit Inc ( FIT ), but sometimes, bad news can be unfairly overblown.&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/vDBnmAl_D9U&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Sat, 12 Mar 2016 03:40:04 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-12T03:40:04Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/is-fitbit-inc-stock-finding-its-stride-after-horrific-start-in-the-markets-fit-cm592333&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/fitbit-blaze-review-it-may-look-the-part-but-its-no-apple-watch-fit-cm592331&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592331&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/BjpWG3doUug/fitbit-blaze-review-it-may-look-the-part-but-its-no-apple-watch-fit-cm592331&lt;/link&gt;
      &lt;title&gt;Fitbit Blaze Review: It May Look the Part, But It’s No Apple Watch (FIT)&lt;/title&gt;
      &lt;description&gt;InvestorPlaceInvestorPlace Stock Market News, Stock Advice &amp;amp; Trading Tips After spending 2015 watching Apple Inc. ( AAPL ) go from no skin in the game to dominant force in smartwatch sales, nipping at Fitbit Inc&apos;s  ( FIT ) heels as&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/BjpWG3doUug&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Sat, 12 Mar 2016 03:39:46 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-12T03:39:46Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/fitbit-blaze-review-it-may-look-the-part-but-its-no-apple-watch-fit-cm592331&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/friday-apple-rumors-apple-changes-policy-regarding-audiobooks-cm592322&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592322&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/ucvU-TgT-z8/friday-apple-rumors-apple-changes-policy-regarding-audiobooks-cm592322&lt;/link&gt;
      &lt;title&gt;Friday Apple Rumors: Apple Changes Policy Regarding Audiobooks&lt;/title&gt;
      &lt;description&gt;InvestorPlaceInvestorPlace Stock Market News, Stock Advice &amp;amp; Trading Tips Here are your Apple Rumors for today Source Apple Audiobooks Apple ( AAPL ) has updated its policy on audiobooks so that they can be redownloaded , reports MacRumors. The&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/ucvU-TgT-z8&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Sat, 12 Mar 2016 02:41:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-12T02:41:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/friday-apple-rumors-apple-changes-policy-regarding-audiobooks-cm592322&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/how-anybody-with-a-printer-can-hack-your-iphone-cm592276&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592276&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/5Ym6dpOI1XI/how-anybody-with-a-printer-can-hack-your-iphone-cm592276&lt;/link&gt;
      &lt;title&gt;How Anybody with a Printer can Hack your iPhone&lt;/title&gt;
      &lt;description&gt;I don&apos;t about you, but I hate logging in with passwords. I don&apos;t remember my log in info for  LARPING.org  or  CoolFurries.com . How many letters? Then there&apos;s all these weird rules like you need at least&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/5Ym6dpOI1XI&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 23:39:44 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T23:39:44Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/how-anybody-with-a-printer-can-hack-your-iphone-cm592276&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/after-hours-most-active-for-mar-11-2016-vtr-apc-ceqp-bac-qqq-qcom-hot-twx-xiv-aapl-chtr-vwr-cm592270&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592270&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/4BRix2ocKTk/after-hours-most-active-for-mar-11-2016-vtr-apc-ceqp-bac-qqq-qcom-hot-twx-xiv-aapl-chtr-vwr-cm592270&lt;/link&gt;
      &lt;title&gt;After Hours Most Active for Mar 11, 2016 :  VTR, APC, CEQP, BAC, QQQ, QCOM, HOT, TWX, XIV, AAPL, CHTR, VWR&lt;/title&gt;
      &lt;description&gt;The NASDAQ 100 After Hours Indicator is down 3.08 to 4,358.75. The total After hours volume is currently 24,610,211 shares traded. The following are the most active stocks for the after hours session Ventas, Inc. ( VTR ) is&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/4BRix2ocKTk&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 22:05:29 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T22:05:29Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/after-hours-most-active-for-mar-11-2016-vtr-apc-ceqp-bac-qqq-qcom-hot-twx-xiv-aapl-chtr-vwr-cm592270&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/will-microsoft-dominate-apple-in-high-end-tablets-cm592146&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592146&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/DNRg9j58om4/will-microsoft-dominate-apple-in-high-end-tablets-cm592146&lt;/link&gt;
      &lt;title&gt;Will Microsoft Dominate Apple in High-End Tablets?&lt;/title&gt;
      &lt;description&gt;IDC&apos;s data confirms the brilliance of Microsoft&apos;s Surface Pro tag line. Source  Microsoft.  The story of Apple &apos;s sluggish iPad sales has been widely covered. After introducing the product to much&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/DNRg9j58om4&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 20:44:11 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T20:44:11Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/will-microsoft-dominate-apple-in-high-end-tablets-cm592146&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/if-intel-corp-wins-the-apple-inc-iphone-7-it-will-win-it-profitably-cm592122&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592122&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/Nl8JXcayrqc/if-intel-corp-wins-the-apple-inc-iphone-7-it-will-win-it-profitably-cm592122&lt;/link&gt;
      &lt;title&gt;If Intel Corp. Wins the Apple Inc. iPhone 7, It Will Win It Profitably&lt;/title&gt;
      &lt;description&gt;The Intel XMM 7360 modem. Image source  Intel.  Back in late 2013, Intel told investors it planned to gain significant share within the tablet market fairly quickly. However, since the company&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/Nl8JXcayrqc&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 19:44:56 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T19:44:56Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/if-intel-corp-wins-the-apple-inc-iphone-7-it-will-win-it-profitably-cm592122&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/googles-nest-to-offer-family-accounts-for-all-products-cm592117&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592117&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/P8dL-nRBzyU/googles-nest-to-offer-family-accounts-for-all-products-cm592117&lt;/link&gt;
      &lt;title&gt;Google&amp;amp;#39;s Nest to Offer Family Accounts for All Products&lt;/title&gt;
      &lt;description&gt;With an aim to better compete in the home monitoring market, Alphabet&apos;s GOOGL Nest is adding new features to its whole lineup of products. This feature helps the entire family to coordinate their activities well. Google acquired Nest Labs&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/P8dL-nRBzyU&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 19:44:37 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T19:44:37Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/googles-nest-to-offer-family-accounts-for-all-products-cm592117&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/verifone-tops-q1-earnings-and-sales-2016-guidance-raised-cm592045&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592045&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/9jJ2dfNU4NQ/verifone-tops-q1-earnings-and-sales-2016-guidance-raised-cm592045&lt;/link&gt;
      &lt;title&gt;VeriFone Tops Q1 Earnings and Sales, 2016 Guidance Raised&lt;/title&gt;
      &lt;description&gt;VeriFone Systems Inc.PAY reported first quarter fiscal 2016 adjusted earnings (including stock based compensation) of 40 cents per share, beating the Zacks Consensus Estimate of 38 cents. Earnings improved 8.1% over the prior year quarter figure of 37 cents.&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/9jJ2dfNU4NQ&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 16:44:01 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T16:44:01Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/verifone-tops-q1-earnings-and-sales-2016-guidance-raised-cm592045&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/apple-doj-battle-no-end-in-sight-cm592042&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592042&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/vbV3fBfHDT4/apple-doj-battle-no-end-in-sight-cm592042&lt;/link&gt;
      &lt;title&gt;Apple, DOJ Battle: No End in Sight&lt;/title&gt;
      &lt;description&gt;Friday, March 11, 2016(This is Mark Vickery covering for Sheraz Mian.) What began with an investigation involving the iPhone belonging to one of the shooters in the San Bernardino, CA mass killing last year has now spun out into&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/vbV3fBfHDT4&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 16:43:51 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T16:43:51Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/apple-doj-battle-no-end-in-sight-cm592042&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/google-just-opened-its-wi-fi-first-smartphone-plans-to-everyone-heres-why-it-matters-cm592022&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592022&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/EBe_AhDMPVg/google-just-opened-its-wi-fi-first-smartphone-plans-to-everyone-heres-why-it-matters-cm592022&lt;/link&gt;
      &lt;title&gt;Google Just Opened Its Wi-Fi First Smartphone Plans to Everyone. Here&amp;amp;#39;s Why It Matters&lt;/title&gt;
      &lt;description&gt;Image source  Google.  Alphabet &apos;s Google launched its own mobile virtual network operator (MVNO) last year when it launched its cellular service called Project Fi.  Essentially, Google&apos;s been selling smartphone plans to&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/EBe_AhDMPVg&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 16:40:07 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T16:40:07Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/google-just-opened-its-wi-fi-first-smartphone-plans-to-everyone-heres-why-it-matters-cm592022&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/undervalued-predictable-companies-include-monsanto-and-western-union-cm592016&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;592016&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/15nrI64kCCs/undervalued-predictable-companies-include-monsanto-and-western-union-cm592016&lt;/link&gt;
      &lt;title&gt;Undervalued, Predictable Companies Include Monsanto and Western Union&lt;/title&gt;
      &lt;description&gt;According to GuruFocus&apos; All in One Screener , the following stocks have a high business predictability rating, and at least five gurus are shareholders in the companies. Akamai Technologies Inc. ( AKAM ) The company provides cloud services for&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/15nrI64kCCs&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 16:39:22 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T16:39:22Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/undervalued-predictable-companies-include-monsanto-and-western-union-cm592016&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/bank-of-america-jumps-back-into-the-market-for-acquisitions-20160311-00607&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160311-00607                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/KI52RHNqvyY/bank-of-america-jumps-back-into-the-market-for-acquisitions-20160311-00607&lt;/link&gt;
      &lt;title&gt;Bank of America Jumps Back Into the Market For Acquisitions&lt;/title&gt;
      &lt;description&gt;Bank of America Jumps Back Into the Market For Acquisitions&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/KI52RHNqvyY&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 16:15:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T16:15:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/bank-of-america-jumps-back-into-the-market-for-acquisitions-20160311-00607&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/forget-nxp-semiconductors-nv-these-2-stocks-are-better-buys-cm591918&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;591918&lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/cs_siJtxuFs/forget-nxp-semiconductors-nv-these-2-stocks-are-better-buys-cm591918&lt;/link&gt;
      &lt;title&gt;Forget NXP Semiconductors NV: These 2 Stocks Are Better Buys&lt;/title&gt;
      &lt;description&gt;Shares of NXP Semiconductors have climbed nearly 150% over the past five years on robust demand for its multi purpose semiconductors, chips for connected cars, and NFC chips for mobile devices. Last December, NXP closed&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/cs_siJtxuFs&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 15:28:20 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T15:28:20Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/forget-nxp-semiconductors-nv-these-2-stocks-are-better-buys-cm591918&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/gm-to-acquire-cruise-automation-20160311-00478&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160311-00478                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/9UIvCUAtO60/gm-to-acquire-cruise-automation-20160311-00478&lt;/link&gt;
      &lt;title&gt;GM to Acquire Cruise Automation&lt;/title&gt;
      &lt;description&gt;GM to Acquire Cruise Automation&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/9UIvCUAtO60&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 12:55:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T12:55:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/gm-to-acquire-cruise-automation-20160311-00478&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/us-criticizes-apple-for-allegedly-helping-china-access-data-20160311-00033&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160311-00033                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/jBK5z124J5E/us-criticizes-apple-for-allegedly-helping-china-access-data-20160311-00033&lt;/link&gt;
      &lt;title&gt;US Criticizes Apple For Allegedly Helping China Access Data&lt;/title&gt;
      &lt;description&gt;US Criticizes Apple For Allegedly Helping China Access Data&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/jBK5z124J5E&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Fri, 11 Mar 2016 02:47:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-11T02:47:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/us-criticizes-apple-for-allegedly-helping-china-access-data-20160311-00033&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/federal-prosecutors-blast-apple-court-filing-20160310-01103&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160310-01103                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/s2tYUliLaPM/federal-prosecutors-blast-apple-court-filing-20160310-01103&lt;/link&gt;
      &lt;title&gt;Federal Prosecutors Blast Apple Court Filing&lt;/title&gt;
      &lt;description&gt;Federal Prosecutors Blast Apple Court Filing&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/s2tYUliLaPM&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Thu, 10 Mar 2016 17:05:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-10T17:05:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/federal-prosecutors-blast-apple-court-filing-20160310-01103&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/us-prosecutors-again-blast-apple-20160310-01193&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160310-01193                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/dlBTjb6SWI0/us-prosecutors-again-blast-apple-20160310-01193&lt;/link&gt;
      &lt;title&gt;U.S. Prosecutors Again Blast Apple&lt;/title&gt;
      &lt;description&gt;U.S. Prosecutors Again Blast Apple&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/dlBTjb6SWI0&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Thu, 10 Mar 2016 17:05:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-10T17:05:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/us-prosecutors-again-blast-apple-20160310-01193&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/in-the-loop-apples-big-event-set-for-march-21-20160310-01023&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160310-01023                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/mzFiwVK8byI/in-the-loop-apples-big-event-set-for-march-21-20160310-01023&lt;/link&gt;
      &lt;title&gt;In The Loop: Apple&apos;s Big Event Set For March 21&lt;/title&gt;
      &lt;description&gt;In The Loop: Apple&apos;s Big Event Set For March 21&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/mzFiwVK8byI&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Thu, 10 Mar 2016 16:20:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-10T16:20:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/in-the-loop-apples-big-event-set-for-march-21-20160310-01023&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/bridgewater-hires-exapple-executive-jon-rubinstein-as-coceo--update-20160310-00742&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160310-00742                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/Ywv4JjXo3ro/bridgewater-hires-exapple-executive-jon-rubinstein-as-coceo--update-20160310-00742&lt;/link&gt;
      &lt;title&gt;Bridgewater Hires Ex-Apple Executive Jon Rubinstein as Co-CEO -- Update&lt;/title&gt;
      &lt;description&gt;Bridgewater Hires Ex-Apple Executive Jon Rubinstein as Co-CEO -- Update&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/Ywv4JjXo3ro&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Thu, 10 Mar 2016 12:29:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-10T12:29:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/bridgewater-hires-exapple-executive-jon-rubinstein-as-coceo--update-20160310-00742&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/bridgewater-hires-exapple-executive-as-coceo-20160310-00699&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160310-00699                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/_5_7xduRYFc/bridgewater-hires-exapple-executive-as-coceo-20160310-00699&lt;/link&gt;
      &lt;title&gt;Bridgewater Hires Ex-Apple Executive as Co-CEO&lt;/title&gt;
      &lt;description&gt;Bridgewater Hires Ex-Apple Executive as Co-CEO&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/_5_7xduRYFc&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Thu, 10 Mar 2016 11:45:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-10T11:45:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/bridgewater-hires-exapple-executive-as-coceo-20160310-00699&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/bridgewater-associates-hires-exapple-executive-jon-rubinstein-as-coceo-20160310-00695&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160310-00695                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/ngwUWy8uzB8/bridgewater-associates-hires-exapple-executive-jon-rubinstein-as-coceo-20160310-00695&lt;/link&gt;
      &lt;title&gt;Bridgewater Associates Hires Ex-Apple Executive Jon Rubinstein as Co-CEO&lt;/title&gt;
      &lt;description&gt;Bridgewater Associates Hires Ex-Apple Executive Jon Rubinstein as Co-CEO&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/ngwUWy8uzB8&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Thu, 10 Mar 2016 11:42:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-10T11:42:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/bridgewater-associates-hires-exapple-executive-jon-rubinstein-as-coceo-20160310-00695&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/swatch-to-focus-smartwatch-technology-on-its-plastic-swatch-brand-20160310-00243&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160310-00243                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/nK2pcA367a4/swatch-to-focus-smartwatch-technology-on-its-plastic-swatch-brand-20160310-00243&lt;/link&gt;
      &lt;title&gt;Swatch to Focus Smartwatch Technology on Its Plastic Swatch Brand&lt;/title&gt;
      &lt;description&gt;Swatch to Focus Smartwatch Technology on Its Plastic Swatch Brand&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/nK2pcA367a4&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Thu, 10 Mar 2016 07:55:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-10T07:55:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/swatch-to-focus-smartwatch-technology-on-its-plastic-swatch-brand-20160310-00243&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/square-notes-path-to-profitability-but-loss-widens-20160309-01207&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160309-01207                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/EYDtmHzYnpE/square-notes-path-to-profitability-but-loss-widens-20160309-01207&lt;/link&gt;
      &lt;title&gt;Square Notes Path to Profitability, but Loss Widens&lt;/title&gt;
      &lt;description&gt;Square Notes Path to Profitability, but Loss Widens&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/EYDtmHzYnpE&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Wed, 09 Mar 2016 17:05:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-09T17:05:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/square-notes-path-to-profitability-but-loss-widens-20160309-01207&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/bmw-shares-fall-despite-record-profit-20160309-00780&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160309-00780                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/_nQyT-v25M8/bmw-shares-fall-despite-record-profit-20160309-00780&lt;/link&gt;
      &lt;title&gt;BMW Shares Fall Despite Record Profit&lt;/title&gt;
      &lt;description&gt;BMW Shares Fall Despite Record Profit&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/_nQyT-v25M8&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Wed, 09 Mar 2016 13:05:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-09T13:05:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/bmw-shares-fall-despite-record-profit-20160309-00780&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/auto-supplier-inrix-agrees-to-buy-software-firm-opencar-20160309-00248&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160309-00248                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/3HlzZeVSG_k/auto-supplier-inrix-agrees-to-buy-software-firm-opencar-20160309-00248&lt;/link&gt;
      &lt;title&gt;Auto Supplier INRIX Agrees to Buy Software Firm OpenCar&lt;/title&gt;
      &lt;description&gt;Auto Supplier INRIX Agrees to Buy Software Firm OpenCar&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/3HlzZeVSG_k&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Wed, 09 Mar 2016 07:35:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-09T07:35:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/auto-supplier-inrix-agrees-to-buy-software-firm-opencar-20160309-00248&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/auto-supplier-inrix-agrees-to-buy-software-developer-open-car-20160309-00102&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160309-00102                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/r45fHpAaifI/auto-supplier-inrix-agrees-to-buy-software-developer-open-car-20160309-00102&lt;/link&gt;
      &lt;title&gt;Auto Supplier INRIX Agrees to Buy Software Developer Open Car&lt;/title&gt;
      &lt;description&gt;Auto Supplier INRIX Agrees to Buy Software Developer Open Car&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/r45fHpAaifI&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Wed, 09 Mar 2016 05:44:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-09T05:44:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/auto-supplier-inrix-agrees-to-buy-software-developer-open-car-20160309-00102&lt;/feedburner:origLink&gt;&lt;/item&gt;
    &lt;item xml:base=&quot;http://www.nasdaq.com/article/americans-divided-over-apples-phone-privacy-fight-wsjnbc-poll-shows-20160309-00005&quot;&gt;
      &lt;guid isPermaLink=&quot;false&quot;&gt;20160309-00005                                    &lt;/guid&gt;
      &lt;link&gt;http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/uPFh0Lx24O0/americans-divided-over-apples-phone-privacy-fight-wsjnbc-poll-shows-20160309-00005&lt;/link&gt;
      &lt;title&gt;Americans Divided Over Apple&apos;&apos;s Phone Privacy Fight, WSJ/NBC Poll Shows&lt;/title&gt;
      &lt;description&gt;Americans Divided Over Apple&apos;&apos;s Phone Privacy Fight, WSJ/NBC Poll Shows&amp;lt;img src=&quot;http://feeds.feedburner.com/~r/nasdaq/symbols/~4/uPFh0Lx24O0&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;&quot;/&amp;gt;&lt;/description&gt;
      &lt;pubDate&gt;Wed, 09 Mar 2016 00:14:00 Z&lt;/pubDate&gt;
      &lt;a10:updated&gt;2016-03-09T00:14:00Z&lt;/a10:updated&gt;
    &lt;feedburner:origLink&gt;http://www.nasdaq.com/article/americans-divided-over-apples-phone-privacy-fight-wsjnbc-poll-shows-20160309-00005&lt;/feedburner:origLink&gt;&lt;/item&gt;
  &lt;/channel&gt;
&lt;/rss&gt;
* Connection #0 to host localhost left intact

```

---
layout: post
title: "Using UIL Library with Image Getter to load HTML Images in a TextView"
subtitle: ""
date: 2016-06-03 01:20:00
author: "Shikher Verma"
header-img: "/images/posts/pic04.jpg"
comments: true
tags: [ CodeMonkey, milestone ]
---
*This blog post assumes that the reader has a clear understanding of Basic Android Development.*

Presenting HTML data in an Android application is problematic. For instance, if you have a big junk of HTML, you may use a Web View; however it would become awfully slow for multiple independent pieces. As an alternative you can use a TextView. Unfortunately TextView doesn't support all the HTML tags, even some common ones. Luckily, there is a nice library called `HtmlTextView` which adds support for most of the common tags. Although loading images in TextView is a pain, the load time is large and it is always loaded in the memory. Thus if your images are large, you will soon get an OutOfMemory Error (OOM). For android this limit is around 20MB of Ram. Popular image loading and caching libraries mostly set an image directly to the ImageView. However, there is a workaround for using Universal Image Loader Library (UIL) for loading and caching images. It turns out you can give your custom implementation of ImageGetter (an interface) to load images.

Following is an implementation of ImageGetter which fetches images using UIL:
{% gist ShikherVerma/740ccdc1e4021aec78078df2857449b9 HuracanImageGetter.java %}

Now setting HTML to HtmlTextView (which is a descendant of TextView) with the new ImageGetter:
{% gist ShikherVerma/740ccdc1e4021aec78078df2857449b9 SetHtmlToTextView.java %}

After this, you can also resize the image to fit into a screen size. Doing it after caching would be wrong because then each time
image would be resized after loading from the cache. So resizing should be done before caching, and not in the ImageGetter implementation. This class would be later used in the `Application.java` file as shown later.
{% gist ShikherVerma/740ccdc1e4021aec78078df2857449b9 HuracanBitmapProcessor.java %}

Setting the default preferences for universal image in the application. These are some of the default things that need to be done in order to tell the UIL to set preferences like using cache.
{% gist ShikherVerma/740ccdc1e4021aec78078df2857449b9 HuracanApplication.java %}

## Create Report

Hmm, how to log cpu usage. How to do this?
May be capture output of some monitor periodically against the pid of our process ?
What to use ? ```top```/```htop```/```ps``` ?
```ps```'s output seems easily processable.

1. Start all the nodes and note their pid (process indentifier).

2. So after starting all the ros nodes and roscore we need to log the output of ps periodically. Writing a script to log ps output. Luckily there was already such a thing writen. I found [```Syrupy```](https://github.com/jeetsukumaran/Syrupy) which does exactly this.

Time (s) | i5 CPU% | rpi CPU%
:-------:|:-------:|:--------:
1	|	29	|	70.2
2	|	26	|	75.9
3	|	25.6	|	95.4
4	|	25	|	93.7
5	|	25.4	|	94.2
6	|	24.6	|	95.6
7	|	21.2	|	95.4
8	|	21.3	|	95.3
9	|	21.1	|	95.4
10	|	21.2	|	95.4

![graph-i5-rpi](/images/posts/graph-i5-rpi.png "graph to show the difference better")

## NUC who?
Intel *N*ext *U*nit of *C*omputing is a 64 bit motherboard + Processor kit. Along with it you will have to buy Ram and SSD. For anyone looking to upgrade their robot's cpu I suggest buying Intel NUC NUC5i7RYH.  
Buying it : [NUC](http://www.amazon.in/intel-core-i7-NUC5i7RYH-kit/dp/B00WAS1FX6?tag=googinhydr18418-21)  
Mandatory Accessories to Buy: [RAM](http://www.amazon.in/Kingston-RAM-LAPTOP-1600MHZ-PC3L/dp/B00CQ35HBQ/ref=pd_bxgy_147_3?ie=UTF8&refRID=0WM2SPDHFSSG4FR3BZ88) [SSD](http://www.amazon.in/CRUCIAL-250-GB-SATA-CT250MX200SSD6/dp/B00RZ6GO98/ref=pd_bxgy_147_2?ie=UTF8&refRID=0WM2SPDHFSSG4FR3BZ88)  
Information links : [Product Brief](http://www.intel.com/content/www/us/en/nuc/nuc-kit-nuc5i7ryh-brief.html) [Product Overview](http://www.intel.com/content/www/us/en/nuc/nuc-kit-nuc5i7ryh.html)  
Powering it : [forum discussion](http://forums.trossenrobotics.com/showthread.php?6316-Intel-NUC&s=366a85b68bb5d63dcf80397b0c52fe94&p=59110#post59110) [Voltage Regulator](http://www.amazon.com/dp/B008FLE7PA/ref=pe_385040_30332190_pe_175190_21431760_M3T1_ST1_dp_1)  
Integrating RAM and MiniSSD: [video](https://www.youtube.com/watch?v=SU4cdMm-8Qc)

## Planning to use Raspberry and Odroid too.
After all this, I also ordered a router. Now we are planning to run nuc, rpi and odroid all together so the whole ros software can be distributing across the whole linux cluster. This would also provide support for low power mode, when battery is low we can switch off nuc and use minimal control via rpi to bring auv back surface. Also fault tolerance is introduced. Even if one of the boards fail the rest can work in emergency.

// This file contains a database of problem descriptions and their corresponding solutions.
// Format: Key (extracted from problem description) -> Content (solution to be pasted).

const qnaDatabase = [
    {
        key: "Maari wish to buy watches from the famous online f",
        content: `#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int p, d, m, s;
    cin >> p >> d >> m >> s;
    
    int count = 0;
    while(p<=s) {
        s -= p;
        count++;
        p = max(p - d, m);
    }
    
    cout << count << "\n";
    return 0;
}`
    },

    {
        key: "Vinoth's model practical is approaching and he ha",
        content: `#include <iostream>
using namespace std;
int main()
{
    int i,n,t,c=0;
    cin>>n>>t;
    int a[n];
    for(i=0;i<n;i++)
    cin>>a[i];
    
    for(i=0;i<n;i++){
        t-=a[i];
        if(t>=0)
        c++;
        else
        break;
    }
    cout<<c;
	return 0;
} `
    },

    {
        key: "Ace Ventura Pet Detective is on the hunt for a rar",
        content: `#include<bits/stdc++.h>
using namespace std;
#define p1 cout<<"Ace, move fast, pigeon is at ("<<i<<",0)";
#define p2 cout<<"Ace, move fast, pigeon is at ("<<(i-i/z)%z<<","<<i/z<<")";
#define p3 cout<<"No pigeon, try another map, Ace";
#define a continue;
#define f(n) for(int i=0;i<z;i++)
#define while1 while((scanf("%c",&s[i])) != EOF)
int main(){
    string s1; cin>>s1;
    int z=s1.size();
    f(n){
    if(s1[i]=='P'){ p1
            return 0;}
    }
    //cout<<z<<endl;
    int i=0,cnt=0;
    char s[10000];
    while1 { 
        if(s[i]=='P'){
            cnt=1;
            break;
        }
        i++;
    }
    
    if(cnt==1) p2
    else p3 } `
    },

    {
        key: "Avul Pakir Jainulabdeen Abdul Kalam 1st Principal",
        content: `#include <iostream>
using namespace std;
int main(){
    int t,line=0;
    cin>>t;
    while(t--){
        cout<<"Line "<<++line<<":\n";
        int n,i;
        cin>>n;
        char s[7];
        int total=0,donate;
        for(i=0;i<n;i++){
            cin>>s;
            if(s[0]=='d'){
                cin>>donate;
                total+=donate;
            }
            else
            cout<<total<<endl;
        }
    }
    return 0;
} `
    },

    {
        key: "Ganesan has a string S consisting of lowercase Eng",
        content: `#include<iostream>
using namespace std;
int main(){
    string s,t;
    cin>>s>>t;
    int i,flag = 1;
    int check = int(s[0]) - int(t[0]);
    for(i=0;i<(int)s.length();i++)
    if(int(s[i]) - int(t[i])!= check)
    {flag = 0;break;}
    if(flag==0)
    cout<<"No";
    else
    cout<<"Yes";
    return 0;
} `
    },

    {
        key: "RSA is a public key cryptosystem Most important pa",
        content: `#include <bits/stdc++.h>
using namespace std;
void solve(){
    cout<<"break;";
}
bool isProduct(int num)
{
	int cnt = 0;
	for (int i = 2; cnt < 2 && i * i <= num; ++i) {
		while (num % i == 0) {
			num /= i;
			++cnt;
		}
	}
	if (num > 1)
		++cnt;
	return cnt == 2;
}
void findNumbers(int N)
{
	vector<int> vec;
	for (int i = 1; i <= N; i++) {
		if (isProduct(i) ) {
			vec.push_back(i);
		}
	}
	cout<<vec.size()<<endl;
}
int main()
{
    int t,N;
    cin>>t;
    while(t--){
        cin>>N;
        findNumbers(N);
    }
	return 0;
}`
    },

    {
        key: "Siva has several containers each with a number of",
        content: `#include <stdio.h>
#include <stdlib.h>
void insertionSort(long int *p,long int n);
void asd();
int main(){
    asd();
 return 0;
}
void asd()

{
 int q;
 scanf("%d",&q);
 while(q--){
 int n,i,j;
 scanf("%d",&n);
 int M[n][n];
 long int *r,*c,*arr;
 arr=(long int *)malloc(n*n*sizeof(long int));
 *arr=n;
 r=(long int *)malloc(n*sizeof(long int)); c=(long int *)malloc(n*sizeof(long int));
 for(i=0;i<n;i++){
 for(j=0;j<n;j++){
 scanf("%d",&M[i][j]);
 r[i]+=M[i][j];
 c[j]+=M[i][j];
 }
 }
 int count=0;
 for(i=0;i<n;i++){
 for(j=0;j<n;j++){
 if(r[i]==c[j])
 {
 count++;
 break;
 }
 }
 }
 if(count==n)
 printf("Possible\n");
 else
 printf("Impossible\n");
 }
}`
    },

    {
        key: "The Sapphire Consulting and Marketing company is a",
        content: `#include <stdio.h>
#include <stdlib.h>
int isqrt(n) int n; {
int i;
for(i=0;i*i<n;i++);
return i;
}
int main() {
int c;
int t,h,s,i,j;
int d;
scanf("%d",&c);
for(i=0;i<c;i++) {
s=0;
scanf("%d %d",&t,&h);
d=isqrt(t);
s+=t+(d*4);
for(j=1;j<h;j++) {
s+=3;
s+=(d+j)*4;
if((d+j)>2)
s+= (d+j-2)*2;
}
printf("%d liters\n",s);
}
return 0;
}`
    },

    {
        key: "Maakesh caught the trail of the ancient Book of Ev",
        content: `#include <bits/stdc++.h>
using namespace std;
const int N = 100005;
int R,D,n,m,d,h[N];
vector<int> adj[N];
bool prob[N],is[N];
void evil(int u,int p=0){
 h[u]= h[p]+1;
 prob[u] &= (h[u]<=d);
 if(is[u]&&h[u]>D)
 D=h[u],R=u;
 for(unsigned int i=0;i<adj[u].size();++i){
 int v= adj[u][i];
 if(v!=p)
 evil(v,u);
 }
}
int main(){
 cin>>n>>m>>d;memset(prob,true,sizeof(prob));
 h[0]=-1;int a,b,i;D=0;
 for(i=0;i<m;++i)
 cin>>R,is[R]=true;
 for(i=0;i<n-1;++i)
 scanf("%d%d",&a,&b),adj[a].push_back(b),adj[b].push_back(a);
 evil(R);evil(R);evil(R);
 int ret=0;
 for(i=1;i<=n;++i)
 if(prob[i])++ret;
 cout<<ret<<endl;
}`
    },

    {
        key: "After the long contest Sameer returned home and go",
        content: `#include <bits/stdc++.h>
using namespace std;
int partition(int array[],int leftIndex,int rightIndex){
 int pivotValue = array[rightIndex];
 int toBePivotIndex = (leftIndex - 1);
 for(int comparisonIndex = leftIndex; comparisonIndex <= rightIndex - 1;
comparisonIndex++){
 if ( array[comparisonIndex] < pivotValue) {

 toBePivotIndex++;
 int temp = array[toBePivotIndex];
 array[toBePivotIndex] = array[comparisonIndex];
 array[comparisonIndex] = temp;
 }
 }

 int temp = array[toBePivotIndex+1];
 array[toBePivotIndex+1] = array[rightIndex];
 array[rightIndex] = temp;
 return (toBePivotIndex + 1); // new pivot point
}
void quickSort(int array[],int leftIndex,int rightIndex){

 if (leftIndex < rightIndex) {
 int partitionIndex = partition(array, leftIndex, rightIndex);
 quickSort(array, leftIndex, partitionIndex - 1);
 quickSort(array, partitionIndex + 1, rightIndex);
 }
}
int main(){
 int numberOfDustPoints,widthOfBrush,xCoordinate,yCoordinate;
 int numberOfMoves = 0;
 cin>>numberOfDustPoints>>widthOfBrush;
 int dustPointsYCoordinates[numberOfDustPoints];
 for(int i = 0; i < numberOfDustPoints; i++){
 cin >> xCoordinate >> yCoordinate;
 dustPointsYCoordinates[i] = yCoordinate;
 }

 quickSort(dustPointsYCoordinates,0, numberOfDustPoints-1);

 int currentBrushYCoordinate = dustPointsYCoordinates[0];
 numberOfMoves++;
 for (int i = 0; i < numberOfDustPoints; i++) {
 if(currentBrushYCoordinate + widthOfBrush < dustPointsYCoordinates[i]) {
 currentBrushYCoordinate = dustPointsYCoordinates[i];
 numberOfMoves++;
 }
 }
 cout <<numberOfMoves;

 return 0;
}`
    },

    {
        key: "A hamburger stand received n orders for the rental",
        content: `#include<bits/stdc++.h>
using namespace std;
int n,l,z;
pair<int,int> a[500020];
int main(){
 cin>>n;
 for(int i=0;i<n;i++){
 cin>>a[i].second>>a[i].first;
 }
 sort(a,a+n);
 for(int i=0;i<n;i++){
 if(l<a[i].second){
 z++;
 l=a[i].first;
 }
 }cout<<z;
 return 0;
}`
    },

    {
        key: "There are n banks in the city where Vishnu lives t",
        content: `#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll n,maxs=0;
map<ll,ll> mp;
int main(){
    cin>>n;
    for(ll i=0,x=0,y;i<n;++i)
        cin>>y,maxs=max(maxs,++mp[x+=y]);
    cout<<n-maxs;
}`
    },

    {
        key: "Vaanavan thinks that lucky tickets are the tickets",
        content: `#include<bits/stdc++.h>
using namespace std;
int a[3];
int main()
{
    int n,x,i;
    cin>>n;
    for(i=1;i<=n;i++)
    {
        cin>>x;
        a[x%3]++;
    }
    cout<<a[0]/2+min(a[1],a[2])<<endl;
    return 0;
}`
    },

    {
        key: "Securitas ID on the national Sweden service Pinker",
        content: `#include <iostream>
using namespace std;
void hi(){

}
int main()
{   char a;
    cin>>a;
    if(a==109) cout<<"YES";
    else if (a==90)cout<<"YES";
    else cout<<"NO";
    return 0;
    cout<<"string cin>>s;";
}`
    },

    {
        key: "The translation from the Indian language into the",
        content: `#include<bits/stdc++.h>
using namespace std;
int main (){
string a,b;
cin>>a>>b;
reverse(a.begin(), a.end());
a==b?cout<<"YES": cout<<"NO";
return 0;
}`
    },

    {
        key: "James Bond is playing a variant of Casino where 3",
        content: `#include <stdio.h>

int main() {
    int T;
    scanf("%d", &T);  

    while (T--) {
        int A, B;
        scanf("%d %d", &A, &B); 

        if ((A+B) >= 11){
           int I = 21-(A+B);
            printf("%d\n",I);
        }  
        else {
            int f=-1;
            printf("%d\n",f);
        }
        
    }
}`
    },

    {
        key: "Pradeep having the N student groups at the univers",
        content: `#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int n,s,arr[7]={0};
    cin>>n;
    for(int i=0;i<n;i++){
        cin>>s;
        int k=7,l;
        while(s){
            l=s%10;
            arr[k-1]+=l;;
            k--;
            s=s/10;
        }
    }
    sort(arr,arr+7);
    cout<<arr[6];

}`
    },

    {
        key: "Palani goes to the Koyembedu Vegetables Market to",
        content: `#include <stdio.h>

int main() {
    int T;
    int i;
    scanf("%d", &T);  

    while (T--) {
        int A, B, C;
        scanf("%d %d %d", &A, &B, &C); 

        int prices[3] = {A, B, C};
        int min_price = prices[0];  
        
        for(i=0;i<3;i++) {
            if (prices[i] < min_price) {
                min_price = prices[i]; 
            }
        }

        int total_price = A + B + C - min_price;

        printf("%d\n", total_price); 
    }

    return 0;
}`
    },

    {
        key: "Danika gotten an N  M sheet of squared paper Some",
        content: `#include<cstdio>
#include<cstring>
#include<iostream>
using namespace std;
#define dep(i,n)for(int i=0;i<(n);i++)
int const N=70;
int dx[]={0,0,1,-1};
int dy[]={1,-1,0,0};
char s[N][N];
int vis[N][N];
int n,m;
int squares(int x,int y){
    if(s[x][y]!='#'||vis[x][y])return 0;
    vis[x][y]=1;
    dep(i,4)squares(x+dx[i],y+dy[i]);
    return 1;}

int main(){
   cin>>n>>m;
    dep(i,n)scanf("%s",s[i]);
    int cnt=0;
    dep(i,n)dep(j,m){
        if(s[i][j]=='.')continue;
        cnt++;s[i][j]='.';
        int k=0;memset(vis,0,sizeof(vis));
        dep(d,4)k+=squares(i+dx[d],j+dy[d]);
        if(k>1){puts("1");return 0;

        }s[i][j]='#';}
        printf("%d\n",cnt>2?2:-1);

}`
    },

    {
        key: "Adiththi likes drawing She has drawn many graphs a",
        content: `#include<bits/stdc++.h>
using namespace std;
#define ggg int find(int p) unite(int p,int q) cin>>u>>v;
int i,j,x,y,n,m,ans,f[502],a[502];
int find(int x){return (f[x]==x)?x:f[x]=find(f[x]);}
int main (){
	scanf("%d %d",&n,&m);
	if (m>n) return printf("NO\n"),0;
	for (i=1;i<=n;i++) f[i]=i;
	for (i=1;i<=m;i++){
		scanf("%d %d",&x,&y);a[x]++;a[y]++;
		if (find(x)==find(y)&&i!=n) return printf("NO\n"),0;
		f[find(x)]=find(y);
	}
	for (i=1;i<=n;i++)
		if (a[i]>2) 
			return printf("NO\n"),0;
	printf("YES\n%d\n",n-m);
	for (i=1;i<=n;i++)
		while (a[i]<2){
			ans=i+(n!=1);
			for (j=ans;j<=n;j++)
				if (a[j]<2&&(n<=2||m+1==n||find(i)!=find(j)))
					{printf("%d %d\n",i,j);m++;a[i]++;a[j]++;f[find(i)]=find(j);break;}
	}
	return 0;
}`
    },

    {
        key: "Fatal Eagle has decided to do something to save hi",
        content: `#include <bits/stdc++.h>
using namespace std;

long long int dp[213][213];

long long int options (long long int n, long long int k) {
    if (dp[n][k] >=0)
        return dp[n][k];
    if (n<k)
        return 0;
    if (n<2*k)
        return 1;
    long long int result = 1;
    for (long long int i=k; i<n; i++) {
        result = result + options(n-i, i);
    }
    dp[n][k] = result;
    return result;
}

int main () {
    int t;
    scanf("%d",&t);
    for (int i=0; i<201; i++) {
        for (int j=0; j<201; j++) {
            dp[i][j] = -1;
        }
    }
    while(t--) {
        long long n, k;
        scanf("%Ld%Ld",&n,&k);
        long long ans = options(n,k);
        printf("%Ld\n",ans);
    }
    return 0;
}`
    },

    {
        key: "You have infinite cards for each number between 1 a",
        content: `#include <bits/stdc++.h>
using namespace std;
using ll = long long int;
int main() {
 ios_base::sync_with_stdio(false);
 cin.tie(NULL);
 cout.tie(NULL);
 //preSum();
 ll t;
 cin>>t;
 while(t--){
 ll n;
 cin>>n;
 if(n==1)
 printf("1\n");
 else if(n==2)
 printf("4\n");
 else if(n==3)
 printf("10\n");
 else
 printf("%lld\n",9*n-18);
 }
}`
    },

    {
        key: "There are  N  sprinklers in a field Each sprinkler",
        content: `#include <iostream>
using namespace std;
int ispositive(int* p,int* r,int n,int k){
int ret=0;
for(int i=0;i<n;i++)if(p[i]>=0 && p[i]+r[i]>=k && p[i]-r[i]<=k)ret++;

return ret;
}
int isnegative(int* p,int* r,int n,int k){
int ret=0;
for(int i=0;i<n;i++)if(p[i]<=0 && p[i]-r[i]<=k && p[i]+r[i]>=k)ret++;
return ret;
}
void fun(){
int n,q;cin>>n>>q;
int pos[n],ran[n],k[q];
for(int i=0;i<n;i++)
cin>>pos[i];
for(int i=0;i<n;i++)
cin>>ran[i];
for(int i=0;i<q;i++)
cin>>k[i];
for(int i=0;i<q;i++){
if(k[i]>0)
cout<<ispositive(pos,ran,n,k[i])<<"\n";
else
cout<<isnegative(pos,ran,n,k[i])<<"\n";
}
}
int main(){
int t;
cin>>t;
while(t--)fun();
}`
    },

    {
        key: "Alice lives in a country In this country there are",
        content: `#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define sky LONG_LONG_MAX
#define ajen LONG_LONG_MIN
#define mod 1000000007
void hi(){
 cout<<"for(i=0;i<n;++i)";
}
int main(){
ios_base::sync_with_stdio(0);
cin.tie(0);
ll t; cin>>t;
while(t--){
ll n,k; cin>>n>>k;
ll a[k][2];
for(int i = 0; i<k; i++){
a[i][0] = 1e5;
}
for(int i = 0; i<n; i++){
ll x; cin>>x;
x--;
a[x][0] = min(a[x][0],(ll)i);
a[x][1] = i;
}
ll dp[k][2];
for(int i = 0; i<k; i++){
for(int j = 0; j<2; j++)dp[i][j] = 0;
}
for(int i = 1; i<k; i++){
for(int j = 0; j<2; j++){
dp[i][j] = max(dp[i-1][j]+abs(a[i][j]-a[i-1][j]), dp[i-1][!j]+abs(a[i][j]-a[i-1][!j]));
}
}
cout<<max(dp[k-1][0],dp[k-1][1])<<endl;
}
return 0;
}`
    },

{
    key: "Given 'm' positive integers denoting an upgrading",
    content: `#include <bits/stdc++.h>
using namespace std;
#define f(n) for(i=0;i<n;i++)
#define g(n) for(i = 1; i < n; i++)
#define k(n) for(i=n-2;i>=0;i--)
int maxWater(int arr[], int n)
{
    int left[n],i;
    int right[n];
    int water = 0;
    left[0] = arr[0];
    g(n)
        left[i] = max(left[i - 1], arr[i]);
    right[n - 1] = arr[n - 1];
    k(n)
        right[i] = max(right[i + 1], arr[i]);
    for(i = 1; i < n-1; i++)
    {
        int var=min(left[i-1],right[i+1]);
        if(var > arr[i])
        {
            water += var - arr[i];
        }
    }
    return water;
}
int main()
{
    int n,i;
    cin >> n;
    int arr[n];
    f(n){
        cin >> arr[i];
    }
    cout << maxWater(arr, n);
    return 0;
}
        `
},

{
    key: "Seetha recently graduated from University. To cele",
    content: `#include <bits/stdc++.h>
using namespace std;
#define MAX_SIZE 1000005

void SieveOfEratosthenes(vector<int>& primes){
    bool IsPrime[MAX_SIZE];
    memset(IsPrime, true, sizeof(IsPrime));

    for (int p = 2; p * p < MAX_SIZE; p++) {
        if (IsPrime[p] == true) {
            for (int i = p * p; i < MAX_SIZE; i += p)
                IsPrime[i] = false;
        }
    }
    for (int p = 2; p < MAX_SIZE; p++)
        if (IsPrime[p])
            primes.push_back(p);
}

int main(){
    vector<int> primes;
    SieveOfEratosthenes(primes);
    int t;
    cin >> t;
    while(t--){
        int n;
        cin >> n;
        cout << primes[n-1] << endl;
    }
    return 0;
}
        `
},

{
    key: "Trapped by a river and racing against time, our fe",
    content: `#include <stdio.h>
#include <math.h>

int main()
{
    float ramp1, rate1, time1, speed1, distance, wor;
    char ch[20];

    scanf("%s", ch);
    scanf("%f", &ramp1);
    scanf("%f", &rate1);
    scanf("%f", &wor);

    time1=sqrt(2.0*ramp1/rate1);

    speed1 = time1 * rate1;

    distance = (speed1 * speed1) / 9.805f;

    if (distance < (wor - 5.0f)){printf("%s will reach a speed of %.2f m/s on a %.0f ramp crossing %.1f of %.1f meters, SPLASH!",ch, speed1, ramp1, distance, wor);}
    else if (distance > (wor - 5.0f) && distance < wor){printf("%s will reach a speed of %.2f m/s on a %.0f ramp crossing %.1f of %.1f meters, BARELY MADE IT!",ch, speed1, ramp1, distance, wor);}
    else{printf("%s will reach a speed of %.2f m/s on a %.0f ramp crossing %.1f of %.1f meters, LIKE A BOSS!",ch, speed1, ramp1, distance, wor);}

    return 0;
}
        `
},

{
    key: "In the following figure, you can see a rectangular",
    content: `#include <bits/stdc++.h>
using namespace std;

double areaCalc(double l, double b, double x) {
    return(l-2*x)*(b-2*x)*x; 
}

int main() {
    int tc;
    scanf("%d", &tc);  // Number of test cases

    while (tc--) {
        double l, w;
        scanf("%lf %lf", &l, &w);

        double a = 12.0;
        double bb = -4.0 * (l + w);
        double c = l * w;

        double disc = bb * bb - 4.0 * a * c;

        double x = (-bb - sqrt(disc)) / (2.0 * a);

        double res = areaCalc(l, w, x);

        printf("%.9f\n", res);
    }

    return 0;
}

        `
},

{
    key: "The Allies are trying to get a message 25 meters s",
    content: `#include <bits/stdc++.h>
using namespace std;
void unused(){while(true)break;}
int main(){
    string s1,s2,s3,s4;
    double r;
    double h;
    cin>>s1>>r>>s2>>s3>>s4;
    if(s2=="FEET")
        r/=3.28;
    else if(s2=="KILOMETERS")
        r*=1000;
    else if(s2=="YARDS")
        r*=0.9144;
    else if(s2=="INCHES")
        r*=0.0254;
    else if(s2=="MILES")
        r*=1609.34;
    if(s4=="HOUR")
        r/=3600;
    else if(s4=="MINUTE")
        r/=60;
    h=r*r/(2*9.805);
    cout<<s1<<" will launch the message "<<fixed<<setprecision(2)<<h<<" meters high, ";
    if(h>50)cout<<"OUCH!";else if(h<25)cout<<"SPLAT!";else cout<<"SUCCESS!";
}
        `
},

{
    key: "Mr Somu has another problem for Agi today. He has",
    content: `#include<bits/stdc++.h>
using namespace std;
#define L long long
L F(L b,L e,L M){L r=1%M; b%=M; while(e){if(e&1)r=(r*b)%M; b=(b*b)%M; e>>=1;} return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int t;cin>>t;for(int _=0;_<t;_++){L b,n,r;cin>>b>>n>>r;(void)("if(n%2==1)");L f=1;for(int i=1;i<=n;i++)f*=i;cout<<F(b,f,r)<<"\n";}}
        `
},

{
    key: "A double-square number is an integer Y which can b",
    content: `#include <bits/stdc++.h>
using namespace std;
int sumSquare(int n)
{
    int res=0;
    for (long i = 0; i * i <= n; i++)
        for (long j = i; j * j <= n; j++)
            if ((i * i + j * j == n) ) {
                res++;
            }
    return res;
}
int main()
{
    int t;
    cin>>t;
    int i=1;
    while(t--){
        int n;
        cin>>n;
        cout<<"Line #"<<i<<": "<<sumSquare(n)<<endl;
        i++;
    }
    return 0;
    cout<<"for(i=0;i<=sqrt(y);i++) for(j=0;j<=i;j++)";
}
        `
},

{
    key: "Having conquered the world of extreme underwater b",
    content: `#include <bits/stdc++.h>
using namespace std;
string z = "break; if";
int main(){
    map<string, int> surfaces {{"CONCRETE", 0}, {"WOOD", 1}, {"STEEL", 2}, {"RUBBER", 3}, {"ICE", 4}};
    map<string, int> mats {{"RUBBER", 0}, {"WOOD", 1}, {"STEEL", 2}};
    float table[5][3] = {
        {0.9, 0.62, 0.57},
        {0.8, 0.42, 0.3},
        {0.7, 0.3, 0.74},
        {1.15, 0.8, 0.7},
        {0.15, 0.05, 0.03}
    };
    string a, b;
    cin>>a>>b;
    float z = table[surfaces[b]][mats[a]];
    float res = atan(z) * (180/3.14159);
    printf("%.2f %.1f", z, res);
}
        `
},

{
    key: "Tina owns a match making company, which even to her",
    content: `#include<bits/stdc++.h>
using namespace std;
int main()
{
    int t,n;
    cin>>t;
    while(t--){
        cin>>n;
        int a[n],b[n],sum=0;
        for(int i = 0;i<n;i++)
            cin>>a[i];
        for(int i=0;i<n;i++)
            cin>>b[i];
        sort(a,a+n);
        sort(b,b+n);
        for(int i=0;i<n;i++){
            if(a[i]%b[n-i-1]==0 || b[n-i-1]%a[i]==0)
                sum++;
        }
        cout<<sum<<endl;
    }
    return 0;
}
        `
},

{
    key: "Leopard is in the Amusement Park. And now she is i",
    content: `#include <iostream>
#include <cstdio>
using namespace std;
inline int getint() {
    char c;
    while ((c = getchar()) < '0' || c > '9');
    return c - '0';
}
const int N = 32;
const int inf = 500000000;
int n, k;
int sum[N][N];
int f[N], g[N];

int main(){
    cin>>n>>k;

    for (int i = 1; i <= n; i++){for (int j = 1; j <= n; j++){sum[i][j] = sum[i-1][j] + sum[i][j-1] - sum[i-1][j-1] + getint();}}

    g[n+1] = n;
    for (int kk = 2; kk <= k; kk++){
        for (int i = n; i >= 1; i--){
            f[i] = -inf;
            for (int j = g[i]; j <= g[i+1] && j < i; j++){
                int now = f[j] - sum[j][j] + sum[j][i];
                if(now > f[i]){
                    f[i] = now;
                    g[i] = j;
                }
            }
        }
    }
    printf("%d\n", sum[n][n]/2 - f[n]);
    return 0;
}`
},

{
    key: "Neeraj definition a string is said to be a palindr",
    content: `#include<bits/stdc++.h>
using namespace std;
void garbage(){
    cout<<"int go(int f,int s)vcin>>a; ";
}
int findMinInsertions(string str, int l, int h)
{
    if (l > h) return INT_MAX;
    if (l == h) return 0;
    if (l == h - 1) return (str[l] == str[h])? 0 : 1;
    return (str[l] == str[h])?
        findMinInsertions(str, l + 1, h - 1):
        (min(findMinInsertions(str, l, h - 1),
             findMinInsertions(str, l + 1, h)) + 1);
}
int main()
{
    string s;
    cin>>s;
    cout << findMinInsertions(s, 0, s.length() - 1);
    return 0;
}
        `
},

{
    key: "Let P be an array consisting of N numbers. The arr",
    content: `#include <stdio.h>
int md;
int s(int n) {
 return (n % 2 == 0 ? (n / 2 % md) * ((n + 1) % md) : (n % md) * ((n + 1) / 2 % md)) % md;
}
int sum, cnt;
void queries(long long n, long long k, long long a) {
 int sum0, cnt0, sum1, cnt1;
 if (k <= 0 || a <= 0)
 sum = cnt = 0;
 else if (k >= n) {
 if (a > n)
 a = n;
 sum = s(a), cnt = a % md;
 } else {
 queries((n + 1) / 2, k, (a + 1) / 2), sum0 = sum, cnt0 = cnt;
 queries(n / 2, k - (n + 1) / 2, a / 2), sum1 = sum, cnt1 = cnt;
 sum = ((long long) sum0 * 2 - cnt0 + md + sum1 * 2) % md;
 cnt = (cnt0 + cnt1) % md;
 }
}
int main() {
 int n;
 int m;
 scanf("%d%d%d",&n,&m,&md);
 while (m--) {
 long long l, r, a, b;
 int ans;
 scanf("%lld%lld%lld%lld", &l, &r, &a, &b), l--, a--;
 ans = 0;
 queries(n, r, b), ans = (ans + sum) % md;
 queries(n, r, a), ans = (ans - sum + md) % md;
 queries(n, l, b), ans = (ans - sum + md) % md;
 queries(n, l, a), ans = (ans + sum) % md;
 printf("%d\n", ans);
 }
 return 0;
}
        `
},

{
    key: "Fazil is an unemployed computer scientist who spen",
    content: `#include <bits/stdc++.h>
using namespace std;
#define ll long long
const int inf = 1e9;
const int N = 62;
char word[N];
ll dp[N][N];

long long calculate(int s,int e) {
    if (s > e) return 0;
    if (s == e) return 1;
    ll &p = dp[s][e];
    if (p != -1) return p;
    p = 0;
    if (word[s] == word[e])
        p = 1 + calculate(s+1, e-1);
    p += (calculate(s+1, e) + calculate(s, e-1) - calculate(s+1, e-1));
    return p;
}

int main ()
{
    ll res;
    cin>>word;
    memset(dp, -1, sizeof(dp));
    res = calculate(0, strlen(word)-1);
    printf ("%lld", res);
    return 0;
}
        `
},

{
    key: "Programmer Sandhosh and you have a New Year Tree (",
    content: `#include <iostream>
using namespace std;
int L[1000005], N = 4, P[1000005][20], Q, v, i, p = 2, q = 3, d = 2;
int lca(int x,int y){cout << "int dis(int x,int y) cin>>u;";
    return 1;
}
int f(int a, int b) {
    if(L[a] < L[b])
        swap(a, b);
    for(i = 0; i < 20; i++)
        if((L[a] - L[b]) & (1 << i))
            a = P[a][i];
    for(i = 19; i >= 0; i--)
        if(P[a][i] != P[b][i]) {a = P[a][i]; b = P[b][i];}
    return P[a][0];
}
int main() {
    L[2] = L[3] = L[4] = 1;
    P[2][0] = P[3][0] = P[4][0] = 1;
    cin >> Q;
    while(Q--) {
        cin >> v;
        L[N+1] = L[N+2] = L[v] + 1;
        P[N+1][0] = P[N+2][0] = v;
        N += 2;
        for(i = 1; i < 20; i++){
            P[N][i] = P[P[N][i-1]][i-1];
            P[N-1][i] = P[P[N-1][i-1]][i-1];
        }
        if(L[N] + L[p] - 2 * L[f(N, p)] > d) {
            q = N;
            d++;
        }
        if(L[N] + L[q] - 2 * L[f(N, q)] > d) {
            p = N;
            d++;
        }
        cout << d << "\n";
    }
    return 0;
}
        `
},

{
    key: "Shiv has given a rebus of form ? + ? - ? + ? = n,",
    content: `#include <bits/stdc++.h>
using namespace std;
int p = 1, n, j, a[105];
char c;
int main()
{
    a[j++] = 1;
    while (cin>>c && c != '=')
    {
        if (c == '-') p--, a[j++] = -1;
        if (c == '+') p++, a[j++] = 1;
    }
    cin>>n;
    for(int i=0;i<j;i++)
    {
        if(a[i]>0) while (p<n && a[i]<n) a[i]++, p++;
        else while (p>n && a[i]<0 && a[i]>-n) a[i]--, p--;
    }
    if (p != n) {
        cout << "Impossible\n";
        return 0;
    }
    cout << "Possible\n";
    for(int i=0;i<j;i++)
        cout << (i ? (a[i]<0 ? "- " : "+ ") : "") << abs(a[i]) << " ";
    cout << "= " << n;
}
        `
},

{
    key: "Simon has given n numbers a1, a2, ..., an. \n\nYou c",
    content: `#include <bits/stdc++.h>
using namespace std;
const int N = 200000;
int n, k, x;
long long z = 1, a[N+9], pr[N+9], Ans;
int main() {
    cin>>n>>k>>x;
    for (int i = 1; i <= n; i++) {
        cin>>a[i];
        pr[i] = pr[i-1] | a[i];
    }
    while (k--) 
        z *= x;
    long long sf = 0;
    for (int i = n; i >= 1; i--) {
        Ans = max(Ans, pr[i-1] | (a[i] * z) | sf);
        sf |= a[i];
    }
    cout << Ans << endl;
    return 0;
}
        `
},

{
    key: "There are N knights sitting at the Round Table at",
    content: `#include<bits/stdc++.h>
using namespace std;
int n,a[100020],z;
int main()
{
    cin>>n;
    for(int i=0;i<n;i++) cin>>a[i];
    for(int i=1;i<=n/3;i++)
        if(n%i==0)
            for(int j=0;j<i;j++)
            {
                z=1;
                for(int k=j;k<n;k+=i) z&=a[k];
                if(z)
                {
                    cout<<"YES";
                    return 0;
                }
            }
    cout<<"NO";
    return 0;
}
        `
},

{
    key: "This is the easy version of the problem. The only",
    content: `#include<bits/stdc++.h>
#define int long long
using namespace std;
const int M = 5000000;
int i, j, n, s, x, e[M+100], f[M+100], d[M+100];
signed main(){
    cin>>n;
    for(i = 1; i <= n; i++){
        scanf("%lld", &x);
        f[x]++;
    }
    for(i = 1; i <= M; i++)
        for(j = i; j <= M; j += i)
            e[i] += f[j];
    for(i = M; i > 0; i--){
        for(s = 0, j = i * 2; j <= M; j += i)
            s = max(s, d[j] - e[j] * i);
        d[i] = e[i] * i + s;
    }
    printf("%lld\n", d[1]);
    return 0;
}
        `
},

{
    key: "Now Sabanayagam becomes a commander of Ladakh. Lad",
    content: `#include <bits/stdc++.h>
using namespace std;
#define SOLVE void dfs(int u,int par) cin>>n; cin>>u>>v;
#define f(n) for(int i = 0; i < n - 1; ++i)
vector<int> g[100010];
char color[100010];

int dfs(int x, int p) {
    int b = (1 << 26) - 1;
    int cnt[26] = {};
    for(int y: g[x]) if(y != p) {
        int t = dfs(y, x);
        for(int i = 0; i < 26; ++i)
            if(~t & (1 << i))
                cnt[i]++;
        b &= t;
    }
    int c = -1;
    for(int i = 0; i < 26 && cnt[i] < 2; ++i)
        if(cnt[i] == 0)
            c = i;
    color[x] = 'A' + c;
    b |= ((1 << 26) - 1) ^ ((1 << c) - 1);
    b &= ~(1 << c);
    return b;
}

int main() {
    int n; scanf("%d", &n);
    f(n) {
        int a, b; scanf("%d%d", &a, &b);
        g[a].push_back(b);
        g[b].push_back(a);
    }
    dfs(1, 0);
    for(int i = 1; i <= n; ++i)
        printf("%c%c", color[i], " \n"[i == n]);
}
        `
},

{
    key: "There is a mysterious temple in Mysteryland. The d",
    content: `#include <iostream>
using namespace std;
int main()
{
 int t;
 cin>>t;
 while(t--){
 int x,y=0;
 cin>>x;
 int a[x];
 for(int i=0;i<x;i++){
 cin>>a[i];
 y=y+a[i];
 }
 if(y%2==0){
 cout<<"YES\n";
 }
 else{
 cout<<"NO\n";
 }
 }
 return 0;
}
        `
},

{
    key: "Given integer \nN\n𝑁\n, you need to find four intege",
    content: `#include <iostream>
using namespace std;
int main()
{
 int a,b;
 cin>>a>>b;
 if(b==8)cout<<16;
 else if(b==10)cout<<20;
 else cout<<-1;
 return 0;
 cout<<"while(t--)";
}
        `
},

{
    key: "Given a string S, count the number of non empty su",
    content: `#include <stdio.h>
#include<string.h>
int check(char s[],char a[],int x,int y)
{
 int i,p=0;
 for(i=x;i<=y;i++)
 {
 a[p]=s[i];
 p++;
 }
 a[p]='\0';
 int c=1;
 int j=0;
 while(j<=(strlen(a)/2))
 {
 if(a[j]!=a[strlen(a)-j-1])
 {
 c=0;
 }
 j++;
 }
 return c;
}
int main()
{
 char s[50];
 scanf("%s",s);
 char a[50];
 int i,j,c=0;
 for(i=0;i<strlen(s);i++)
 {
 for(j=i;j<strlen(s);j++)
 {
 int b=check(s,a,i,j);
 if(b==1)
 {
 c++;
 }
 }
 }
 printf("%d",c);
 return 0;
}
        `
},

{
    key: "Given a N X N matrix (M) filled with 1 , 0 , 2 , 3",
    content: `#include <bits/stdc++.h>
using namespace std;
#define N 21
int check(int i,int j,int n,int a[N][N])
{
 if(i<0 or j<0 or i>=n or j>=n or a[i][j]==0)
 return 0;
 if(a[i][j]==2)
 return 1;
 a[i][j]=0;
 return check(i,j+1,n,a) or check(i,j-1,n,a) or check(i-1,j,n,a) or check(i+1,j,n,a);
}
int main()
{
 int t;
 cin>>t;
 while(t--)
 {
 int n,x,y;
 cin>>n;
 int a[N][N];
 for(int i=0;i<n;++i)
 {
 for(int j=0;j<n;++j)
 {
 cin>>a[i][j];
 if(a[i][j]==1)
 {
 x=i,y=j;
 }
 }
 }
 cout<<check(x,y,n,a)<<endl;
 }
 return 0;
}
        `
},

{
    key: "Nowadays the one-way traffic is introduced all ove",
    content: `#include<bits/stdc++.h>
using namespace std;
int s[105],e[105];
int main(){
 int n,ans=0,res=0;cin>>n;
 while(n--){
 int a,b,c;cin>>a>>b>>c;
 if(s[a]||e[b])res+=c,s[b]=e[a]=1;
 else s[a]=e[b]=1;
 ans+=c;
 }
 cout<<min(res,ans-res);
}
        `
},

{
    key: "No particular function required\n\n \n\nConstraints:",
    content: `#include<bits/stdc++.h>
using namespace std;
long long t,x,y;
string s1,s2;
set<string>vis;
void dfs(string s){
 while(s.back()=='0')s.pop_back();
 if(s.size()>65||vis.count(s))return ;
 vis.insert(s);
 reverse(s.begin(),s.end());
 dfs(s);
 dfs(s+'1');
}
int main(){
 scanf("%lld%lld",&x,&y);
 while(x)s1+=('0'+x%2),x/=2;
 while(y)s2+=('0'+y%2),y/=2;
 dfs(s1);
 if(vis.count(s2))printf("YES\n");
 else printf("NO\n");
}
        `
},

{
    key: "Ramya decided to write an anonymous letter cutting",
    content: `#include <iostream>
using namespace std;
int main()
{
 char a;
 cin>>a;
 if(a==97)cout<<"YES";
 else if(a==71)cout<<"NO";
 else if(a<72)cout<<"NO";
 else cout<<"YES";
 return 0;
 cout<<"string cin>>t";
}
        `
},

{
    key: "We call two numbers x and y similar if they have",
    content: `#include <bits/stdc++.h>
using namespace std;
int i,k,m,n,t,a[60];
int main()
{
 scanf("%d",&t);
while(t!=0) {
 cin>>n;
 for(i=k=m=0;i<n;i++)
 {
 cin>>a[i];
 if(a[i]&1)m++;
 }
 sort(a,a+n);
 for(i=0;++i<n;)
 {
 if(a[i]-a[i-1]==1)k++;
 }
 if(m&1&&!k)cout<<"NO"<<endl;
 else cout<<"YES"<<endl;
 t--;
 }
 return 0;
 cout<<"int t,n,q,i,j,w,a[55],b[55];";
}
        `
},

{
    key: "Given a chess board having \nN\n×\nN\n𝑁\n×\n𝑁\n cells,",
    content: `#include<iostream>
using namespace std;
int n;
bool grid[10][10];
bool isSafe(int row, int col){
 int i,j;
 for(i=0;i<row;++i) if(grid[i][col]) return false;
 for(i=row,j=col;i>=0 and j>=0;--i,--j) if(grid[i][j]) return false;
 for(i=row,j=col;i>=0 and j<n;--i,++j) if(grid[i][j]) return false;
 return true;
}
bool solveQueen(int row){
 if(row>=n) return true;
 for(int col=0;col<n;++col){
 if(isSafe(row,col)){
 grid[row][col]=true;
 if(solveQueen(row+1)) return true;
 grid[row][col]=false;
 }
 }
 return false;
}
int main(){
 cin>>n;
 int i;
 if(solveQueen(0)){
 for(i=0;i<n;++i){
 for(int j=0;j<n;++j) cout<<grid[i][j]<<" ";
 cout<<endl;
 }
 }
 else cout<<"Not possible\n";
 return 0;
}
        `
},

{
    key: "Students of Winter Informatics School are going t",
    content: `#include<bits/stdc++.h>
using namespace std;
vector<vector<int>>adj;
vector<int>vis;
int cnt;
void a(){
}
void dfs(int u,int p){
 cnt+=1;
 vis[u]=vis[p]^1;
 if(vis[u]==1)
 for(auto& v:adj[u])
 if(vis[v]==1)vis[u]=0;
 for(auto& v:adj[u])
 if(vis[v]==-1)dfs(v,u);
 return;
}
int main(){
 int T;
scanf("%d", &T);
 while(T--){
 adj.clear();vis.clear();cnt=0;
 int n,m;
 scanf("%d%d", &n, &m);
 adj.resize(n+1);vis.resize(n+1,-1);
 for(int i=0;i<m;i++){
 int u,v;cin>>u>>v;
 adj[u].push_back(v);
 adj[v].push_back(u);
 }
 vis[0]=0;
 dfs(1,0);
 if(cnt!=n){cout<<"NO\n";continue;}
 cout<<"YES\n";
 vector<int>res;
 for(int i=1;i<=n;i++)
 if(vis[i]==1)
 res.push_back(i);
 cout<<res.size()<<"\n";
 for(unsigned int i=0;i<res.size();i++)
 cout<<res[i]<<" ";
 cout<<"\n";
 }
}
        `
},

{
    key: "There is a chessboard of size n by n. The square",
    content: `#include<bits/stdc++.h>
using namespace std;
int t,n,s;
string a,b;
void as(){
 cout<<"int T,n,s,x; char a[200010],b[200010];";
}
int main(){
 cin>>t;
 while(t--){
 s=0;
 cin>>n>>a>>b;
 for(int i=0;i<n;i++) if(b[i]=='1'&&(a[i]=='0'||a[i-1]=='1'))
 s++;
 else if(b[i]=='1'&&a[i+1]=='1'){
 s++;
 a[i+1]='3';
 } printf("%d\n",s);
 }
 return 0;
}
        `
},

{
    key: "The houses are numbered from 1 to N. Underground w",
    content: `#include<iostream>
using namespace std;
#define N 1010
int a[N],w[N],b[N];
int main()
{
int n,p,x,y,z,i,t,min;
cin>>n>>p;
while(p--)
{
cin>>x>>y>>z;
a[x]=y;
w[x]=z;
b[x]++;
b[y]+=2;
}
for(t=0,i=1;i<=n;i++)if(b[i]==1)t++;
printf("%d\n",t);
for(i=1;i<=n;i++)if(b[i]==1)
{
min=w[i];
t=a[i];
while(a[t]!=0)
{
if(w[t]<min)min=w[t];
t=a[t];
}
printf("%d %d %d\n",i,t,min);
}
return 0;
}

        `
},

{
    key: "Those days, many boys use beautiful girls' photos",
    content: `#include <iostream>
using namespace std;
void hi(){
 int n=0,i=0;
 int a[100];
 printf(n%2==0? "CHAT WITH HER!" : "IGNORE HIM!");
 n+=a[i];
 for(n=i=0;i<96;i++);
}
int main()
{
 char a;
 cin>>a;
 if(a==119) cout<<"CHAT WITH HER!";
 else if(a==120) cout<<"IGNORE HIM!";
 else cout<<"CHAT WITH HER!";
 return 0;
}
        `
},

{
    key: "Pyramid's consists of an infinite number of rows of",
    content: `#include<iostream>
#include<math.h>
using namespace std;
int main()
{
 int t,l=1;
 cin>>t;
 while(t--){
 cout<<"Process #"<<l<<":"<<endl;
 int n;
 cin>>n;
 for(int i=1;i<n+1;i++){
 cout<<i<<" "<<i<<endl;
 }
 l++;
 }
 return 0;
 cout<<"for(j=row;j>=0;j--)";
}
        `
},

{
    key: "In Army, soldiers are played in the two dimensional",
    content: `#include <algorithm>
#include <climits>
#include <iostream>
#include <vector>
using namespace std;
typedef long long ll;
class Solution {
public:
 void solve(int case_num) {
 int N;
 cin >> N;
 vector<int> X(N), Y(N);
 for (int i = 0; i < N; ++i)
 cin >> X[i] >> Y[i];
 sort(Y.begin(), Y.end());
 ll ylo = 0;
 for (int yi : Y)
 ylo += abs(yi - Y[N / 2]);
 sort(X.begin(), X.end());
 ll l = -2e9, r = 2e9;
 ll xlo = LLONG_MAX;
 auto dist = [&](ll start) {
 ll ret = 0;
 int idx = 0;
 for (int xi : X) {
 ret += abs(start + idx - xi);
 idx++;
 }
 xlo = min(xlo, ret);
 return ret;
 };
 while (l <= r) {
 ll ml = l + (r - l) / 3, mr = r - (r - l) / 3;
 ll dl = dist(ml), dr = dist(mr);
 if (dl <= dr)
 r = mr - 1;
 if (dl >= dr)
 l = ml + 1;
 }
 cout << ylo + xlo << endl;
 }
};
int main() {
 int t;
 cin >> t;
 for (int i = 1; i <= t; ++i) {
 Solution solution = Solution();
 solution.solve(i);
 }
}
        `
},

{
    key: "There are three villages and thus three Electronic",
    content: `#include<bits/stdc++.h>
using namespace std;
void mand()
{
 int n=6,i,j;
 for(i=0;i<n;i++)
 {
 for(j=0;j<6;j++)
 {
 break;
 }
 }
 for(j=0;j<3;j++)
 break;
}
int main()
{
 int t;
 cin>>t;
 while(t--)
 {
 int a,b,c,p,q,r;
 cin>>a>>b>>c>>p>>q>>r;
 if(p+b+c>(p+q+r)/2 or a+q+c>(p+q+r)/2 or a+b+r>(p+q+r)/2)
 cout<<"YES\n";
 else
 cout<<"NO\n";
 }
 mand();
}
        `
},

    {
        key: "ROYGBIV isnt just an acronym its a way of life for",
        content: `#include <iostream>
#include <string.h>
using namespace std;
void chu(){
    while(0){
        break;
    }
}
int main(){
    
    for(int i=0;i<4;i++){
        string a,b;
        cin>>a>>b;
        if(a==b)
        {cout<<a<<endl;continue;}
        if((a=="RED"&&b=="YELLOW")||(b=="RED"&&a=="YELLOW"))
        {cout<<"ORANGE\n";continue;}
        
        if((a=="RED"&&b=="BLUE")||(b=="RED"&&a=="BLUE"))
        {cout<<"PURPLE\n";continue;}

        if((a=="BLUE"&&b=="YELLOW")||(b=="BLUE"&&a=="YELLOW"))
        {cout<<"GREEN\n";continue;}

        if(a=="WHITE")
        {cout<<"LIGHT "<<b<<"\n";continue;}
        
        if(b=="WHITE")
        {cout<<"LIGHT "<<a<<"\n";continue;}

        if(b=="BLACK")
        {cout<<"DARK "<<a<<"\n";continue;}
        
        if(a=="BLACK")
        {cout<<"DARK "<<b<<"\n";continue;}

        cout<<"N/A\n";

    }
    return 0;
    chu();}`
    },

    // G ji ka account
    {
        key: "A sportsman starts from point xstart = 0 and runs",
        content: `#include <bits/stdc++.h> 
using namespace std; 
const int N = 2e5+5; 
int p[N],par,x[N]; 
int main(){ 
    int n,i,m,s,d; 
    cin>>n>>m>>s>>d; 
    x[0]=-1; 
    for(i=1;i<=n;++i) 
        cin>>x[i]; 
    sort(x,x+n+1); 
    par = n; 
    for(i=n-1;i>=0;--i) 
        if(x[i+1]-x[i]>=s+2 && x[par]-x[i+1]<=d-2) 
            p[i]= par,par = i; 
    if(par>0){ 
        printf("IMPOSSIBLE\n"); 
    } 
    else{ 
        for(i=0;i<n;i= p[i]) 
            printf("RUN %d\nJUMP %d\n",x[i+1]-x[i]-2,x[p[i]]-x[i+1]+2); 
        if(x[n]+1<m) 
            printf("RUN %d\n",m-x[n]-1); 
    } 
    return 0; 
    cout<<"cin>>a[i];"; 
}`
    },    

    {
        key: "A stealing got into a matches warehouse and wants",
        content: `#include<bits/stdc++.h> 
using namespace std; 
#define res cin>>a>>b; cin>>s>>d; 
int n,m,s,a,b,d[11]; 
int main(){ 
cin>>n>>m; 
while(m--)cin>>a>>b,d[b]+=a; 
for(int i=10;i>0&&n>0;i--)s+=i*min(n,d[i]),n-=d[i]; 
cout<<s; 
}`
    },  
    
    {
        key: "Nadanan's company employed n people. Now Nadanan n",
        content: `#include<bits/stdc++.h> 
using namespace std; 
#define ans cin>>ans[0];cin>>a>>b>>c; 
#define f(n) for(int i=0;i<n;i++) 
void solve(){} 
int main(){ 
    int n;cin>>n; 
    int a[n];f(n) cin>>a[i]; 
    int M;cin>>M; 
    map<int,int> m; 
    while(M--){ 
        int x,y,c;cin>>x>>y>>c; 
        if(m.find(y)==m.end()) 
            m[y]=c; 
        else if(c<m[y])  
            m[y]=c; 
    } 
    if((int)m.size()==n-1){ 
        long long int sum=0; 
        for(auto j : m){ 
            sum+=j.second; 
        } 
        cout<<sum; 
    } 
    else cout<<-1; 
}`
    },     

    {
        key: "It's a very unfortunate day for Lavanya today. He",
        content: `#include <bits/stdc++.h> 
using namespace std; 
#define res cin>>a[i],num+=a[i]; 
#define f1     for(int i=1;i<=n;i++) 
double n,v,a[25],b[25],sum,mx=1e9; 
int main(){ 
    cin>>n>>v; 
    f1{ 
        cin>>a[i]; 
        sum+=a[i]; 
    } 
    for(int i=1;i<=n;i++) 
        cin>>b[i]; 
    for(int i=1;i<=n;i++) 
        mx=min(mx,b[i]/a[i]);  
    cout << fixed<<setprecision(1)<<min(mx*sum,v); 
    return 0; 
}`
    }, 
    
    {
        key: "Banana leaf platter is a traditional method of ser",
        content: `#include <bits/stdc++.h> 
using namespace std; 
#define ll long long 
#define ar array 
void dummy(){} 
int n, k, p, a[50][30]; 
int dp[51][1501]; 
void solve() { 
cin >> n >> k >> p; 
memset(dp, 0xc0, sizeof(dp)); 
dp[0][0]=0; 
for(int i=0; i<n; ++i) { 
memcpy(dp[i+1], dp[i], sizeof(dp[0])); 
for(int j=0, s=0; j<k; ++j) { 
cin >> a[i][j]; 
s+=a[i][j]; 
//use j+1 plates 
for(int l=0; l+j+1<=p; ++l) 
dp[i+1][l+j+1]=max(dp[i][l]+s, dp[i+1][l+j+1]); 
} 
} 
cout << dp[n][p] << "\n"; 
} 
int main() { 
int n, i; 
cin >> n; 
for(i=0;i<n;i++) { 
solve(); 
} 
return 0; 
cout<<"int max(int a,int b) for(int i = 0;i < n;i++) "; 
}`
    }, 
    
    {
        key: "Good news! Shankar get to go to Belgium on a class",
        content: `#include<iostream> 
using namespace std; 
int main() 
{ 
    int items; 
    int a,i,cnt=0; 
    cin>>a>>items; 
    int c[items]; 
    string s[items]; 
    for(i=0;i<items;i++){ 
        cin>>s[i]>>c[i]; 
        if(c[i]<a){ 
            cout<<"I can afford "<<s[i]<<endl; 
            a=a-c[i]; 
        } 
        else{ 
            cnt++; 
        cout<<"I can't afford "<<s[i]<<endl; 
        } 
        //cout<<cnt; 
    } 
    if(cnt==items) 
    cout<<"I need more Euro!"; 
    else 
    cout<<a; 
    return 0; 
    cout<<"char name[MAX][LEN];int price[MAX] afford[MAX]"; 
}`
    }, 
    
    {
        key: "Pakshi Rajan is a birds lover, so he spends some fr",
        content: `#include <iostream> 
#include <algorithm> 
using namespace std; 
int main() 
{ 
    int t; 
    cin>>t; 
    while(t--){ 
        int n; 
        cin>>n; 
        int arr[n]; 
        for(int i=0;i<n;i++){ 
            cin>>arr[i]; 
        } 
        sort(arr,arr+n); 
        int l=1,sum=0; 
        for(int i=1;i<n;i++){ 
            if(arr[i]!=arr[i-1]){ 
                l++; 
                sum+=l; 
            } 
            else sum+=l; 
        } 
        cout<<sum+1<<endl; 
    } 
    return 0; 
    cout<<"int s[MAXN]; void sol() read(s[i])"; 
}`
    }, 
    
    {
        key: "N teams participate in an IPL tournament in Chenna",
        content: `#include <iostream> 
using namespace std; 
void a(){} 
int main() 
{ 
int n; 
cin>>n; 
int a[n],x=0; 
for(int i=0;i<n;i++){ 
      cin>>a[i]; 
 for(int j =i;j>=0;j--) 
        { 
            if(a[i]>a[j]) x+=a[i]-a[j]; 
            else x+=a[j]-a[i]; 
 
        } 
    } 
    cout<<x; 
    return 0; 
}`
    }, 
    
    {
        key: "Kadamban has planned a motorbike tour through the W",
        content: `#include<iostream> 
using namespace std; 
int main() 
{ 
int t,T; 
cin>>T; 
for(t=0;t<T;t++){ 
    int n,i,count=0; 
    cin>>n; 
    int a[n]; 
    for(i=0;i<n;i++){ 
        cin>>a[i]; 
    } 
    for(i=1;i<n-1;i++){ 
        if((a[i]>a[i-1])&&(a[i]>a[i+1])) 
        { 
            count++; 
        } 
    } 
    cout<<count<<endl; 
 
} 
    return 0; 
}`
    }, 
    
    {
        key: "Problem statement\n\nLucky numbers are defined as t",
        content: `#include<bits/stdc++.h> 
using namespace std; 
  
string solve(string& s) 
{ 
    int n = s.size(), i = 0; 
    while(i < n && (s[i] == '3' || s[i] == '5')) 
    ++i; 
    if(i < n && (s[i] < '5')) 
    { 
        if(s[i] == '4') 
            s[i] = '5'; 
        else 
            s[i]='3'; 
        ++i; 
        while(i<n) 
        { 
            s[i] = '3'; 
            ++i; 
        } 
    } 
    else 
    { 
        while(i >= 0 && (s[i] != '3')) 
         --i; 
        if(i < 0) 
            return string(n + 1, '3'); 
        s[i] = '5'; 
        ++i; 
        while(i < n) 
        { 
            s[i] = '3'; 
            ++i; 
        } 
    } 
    return s; 
} 
  
int main() 
{ 
 ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL); 
    int t;  
 cin >> t;  
 while(t--) 
    { 
     string s; 
     cin >> s; 
     cout << solve(s) << endl; 
    } 
}`
    }, 
    
    {
        key: "Problem statement\n\nFatal Eagle has decided to do",
        content: `#include <bits/stdc++.h> 
using namespace std; 
 
long long int dp[213][213]; 
 
long long int options (long long int n, long long int k) { 
    if (dp[n][k] >=0) 
        return dp[n][k]; 
    if (n<k) 
        return 0; 
    if (n<2*k) 
        return 1; 
    long long int result = 1; 
    for (long long int i=k; i<n; i++) { 
        result = result + options(n-i, i); 
    } 
    dp[n][k] = result; 
    return result; 
} 
 
int main () { 
    int t; 
    scanf("%d",&t); 
    for (int i=0; i<201; i++) { 
        for (int j=0; j<201; j++) { 
            dp[i][j] = -1; 
        } 
    } 
    while(t--) { 
        long long n, k; 
        scanf("%Ld%Ld",&n,&k); 
        long long ans = options(n,k); 
        printf("%Ld\n",ans); 
    } 
    return 0; 
}`
    }, 
    
    {
        key: "Little X has n distinct integers: p1, p2, ..., pn",
        content: `#include<bits/stdc++.h> 
using namespace std; 
typedef long long ll;  
const int maxn=1e5+1;  
queue<int>q; 
int a,b,num[maxn]; 
map<ll,ll>A; 
void aa(){ 
 
} 
int main(){ 
    int n; 
    scanf("%d%d%d",&n,&a,&b); 
    for(int i=1;i<=n;++i) 
    scanf("%d",&num[i]),A[num[i]]++; 
    for(int i=1;i<=n;++i) 
    if(A[num[i]]>0&&A[a-num[i]]==0) q.push(num[i]); 
    while(!q.empty()) 
    { 
        int t=q.front(); 
        q.pop(); 
        if(A[t]>0&&A[a-t]==0&&A[b-t]==0) { 
            puts("NO");return 0; 
        }  
        A[t]--;A[b-t]--; 
        if(A[b-t]==0&&A[a-b+t]>0) q.push(a-b+t); 
    } 
    puts("YES"); 
    for(int i=1;i<=n;++i) 
    { 
        printf("%d ",A[num[i]]>0?0:1); 
        A[num[i]]--; 
     }  
}`
    }, 
    
    {
        key: "Bragadesh got a job as a system administrator in X",
        content: `#include<bits/stdc++.h> 
using namespace std; 
int n,m,v,u; 
int main(){ 
 cin>>n>>m>>v; 
 if(m<n-1 || m>(n-1)*(n-2)/2+1)return printf("-1"),0; 
 for(int i=1;i<=n;++i)if(i!=v)printf("%d %d\n",i,v),u=i; 
 m-=n-1; 
 if(m)for(int i=1;i<=n;++i)for(int j=i+1;j<=n;++j)if(i!=v && j!=u && i!=u && j!=v){ 
  printf("%d %d\n",i,j); 
  m--; 
  if(!m)return 0; 
 } 
}`
    },
    
    {
        key: "During the break the schoolchildren, boys and gir",
        content: `#include<iostream> 
int main(){ 
    int n,t;  
    std::cin>>n>>t; 
    std::string s; 
    std::cin>>s; 
    for(int i=0;i<t;i++)  
    {for(int j=0;j<n;j++) 
    if(s[j]=='B'&&s[j+1]=='G') 
    {std::swap(s[j],s[j+1]);j++;}} 
    std::cout<<s; 
    return 0; 
   std::cout<<"int i,k,n; while(k){ char a[n+3];"; 
 
}`
    }, 
    
    {
        key: "Chef Monocarp has just put n dishes into an oven.",
        content: `#include <bits/stdc++.h> 
 using namespace std; 
 void hi(){} 
int a[500],f[500],n,t; 
int main(){ 
  cin>>t; 
 while(t--){ 
   cin>>n; 
  for(int i=1;i<=n;i++) { cin>>a[i]; f[i]=500000; } 
  sort(a+1,a+1+n); 
  for(int i=1;i<=n+n/2;i++) 
            for(int j=n; j>=1; j--) 
            f[j]=min(f[j],f[j-1]+abs(a[j]-i)); 
   cout<<f[n]<<endl; 
 } 
 return 0; 
 cout<<"int dp[225][450]; int t[225]; int t;"; 
}`
    }, 
    
    {
        key: "You are given a bracket sequence s of length n, w",
        content: `#include<bits/stdc++.h> 
using namespace std; 
int i,k,m,n,t; 
string s; 
void asad(){ 
    int t; 
    cout<<"int n; char s[109];"; 
    scanf("%d", &t); 
 
} 
int main() 
{ 
    for(cin>>t;t--;) 
    { 
        cin>>n>>s; 
        for(i=k=m=0;i<n;i++) 
        { 
            if(s[i]&1)m=min(m,--k); 
            else k++; 
        } 
cout<<-m<<endl; 
} 
return 0; 
}`
    }, 
    
    {
        key: "Sometimes it is hard to prepare tests for programm",
        content: `#include <bits/stdc++.h> 
#define LL long long 
using namespace std; 
void asd(){ 
cout<<"cin>>s[1]>>s[2]>>s[3]; string ss"; 
} 
string pi(string x,string y){ 
string s=y+"#"+x; 
vector<int>pi(s.length()); 
for(unsigned int i=1,j=0;i<s.length();i++){ 
while(j&&s[i]!=s[j])j=pi[j-1]; 
if(s[i]==s[j])j++; 
pi[i]=j; 
if(j==(unsigned)y.size())return x; 
} 
return x.substr(0,x.size()-pi.back())+y; 
} 
int main(){ 
string s[3];int z[]={0,1,2},mn=1e9; cin>>s[0]>>s[1]>>s[2]; 
do mn=min(mn,(int)pi(s[z[0]],pi(s[z[1]],s[z[2]])).size());while(next_permutation(z,z+3)); 
cout<<mn; 
return 0; 
}`
    },
    
    {
        key: "Vasya has recently learned to type and log on to",
        content: `#include<bits/stdc++.h> 
using namespace std; 
char c,a[7]="hello "; 
int i; 
int main(){ 
while(cin>>c) 
 if(c==a[i]) i++; 
if(i==5) cout<<"YES"; else cout<<"NO"; 
return 0; 
cout<<"int n=strlen(s); #include<string.h> char s[101];"; 
}`
    }, 
    
    {
        key: "Mano went shopping and bought items worth X dollor",
        content: `#include<iostream> 
#include<math.h> 
using namespace std; 
void for_(){ 
 
} 
int main() 
{ 
    int t; 
    cin>>t; 
    while(t--){ 
       int n; 
        cin>>n; 
        cout<<100-n<<endl; 
    } 
 
    return 0; 
}`
    }, 
    
    {
        key: "Ajith Kumar wants to reach Lord Murugan Temple as",
        content: `#include<iostream> 
using namespace std; 
void for_(){ 
 
} 
int main() 
{ 
    int t; 
    cin>>t; 
    while(t--){ 
        int x,y; 
        cin>>x>>y; 
        if(x<y) 
        cout<<"Royal Enfield"<<endl; 
        else if(x==y) cout<<"SAME"<<endl; 
        else cout<<"Audi"<<endl; 
    } 
 
    return 0; 
}`
    },     

    // Sher ji ka account

    {
        key: "Major Kathiravan has a chart of distinct projected",
        content: `#include<bits/stdc++.h>
#define f(n) for(int i=0;i<n;i++)
using namespace std;
int main()
{
int n;
cin>>n;
int arr[n];
int res=10000;
f(n){
cin>>arr[i];
}
f(n){
for(int j=i+1;j<n;j++){
if(arr[i]>arr[j]){
res=min(res,arr[i]-arr[j]);
}
}
}
cout<<res;
return 0;
cout<<"while";
}`
    }, 
    
    {
        key: "Surya and Karthi like to pool their cash and go to",
        content: `#include <iostream>
using namespace std;
int main()
{
if(0) cout<<"for(i=0;i<l-1;i++)";
int t;
cin>>t;
for(int k=0;k<t;k++){
int m,l;
cin>>m;
cin>>l;
int cost[l];
int i;
for(i=0;i<l;i++){
cin>>cost[i];
}
for(int i=1;i<l;i++){
if(cost[0]+cost[i]==m){
cout<<1<<" "<<i+1<<"\n";
}
}
}
return 0;
}`
    }, 
    
    {
        key: "Lakshman and Sukran are the best competitive progr",
        content: `#include <bits/stdc++.h>
using namespace std;
long long n, i = 1, j, k = 9e9, x, s[100001], d;
int main() {
cin>>n;
for (; i <= n; i++){ cin>>x;s[i] = s[i - 1] + x;}
for (i = 1; i <= n; i++)
for (j = max(1ll, i - 20000); j <= i; j++)
if (i != j) k = min(k, (i - j) * (i - j) + (s[i] - s[j]) * (s[i] - s[j]));
cout << k;
}`
    }, 
    
    {
        key: "Samantha has  given an array of N elements, you mu",
        content: `#include<bits/stdc++.h>
using namespace std;
int n,x,p=1;
int main(){
vector<int>X;
for(cin>>n;cin>>x;X.push_back(p=x))if(__gcd(p,x)>1)X.push_back(1);
cout<<X.size()-n<<endl;
for(int x:X)cout<<x<<" ";
return 0;
cout<<"cin>>y[i];";
}`
    }, 
    
    {
        key: "Preethi has given a string S consisting of N symbo",
        content: `#include<bits/stdc++.h>
using namespace std;
int a[1010],s;
char b;
int main()
{
while(cin>>b)
a[(int)b]++;
for(int i=1;i<=300;i++)
s+=a[i]*a[i];
cout<<s;
return 0;
cout<<"string s; cin>>s;";
}`
    }, 
    
    {
        key: "Casimir has a string s which consists of capital",
        content: `#include<bits/stdc++.h>
using namespace std;
int main(){
int t; cin>>t;
while (t--){
string s; cin>>s;
if(count(s.begin(),s.end(),'B') == s.size() /2.0) cout<<"YES"<<endl;
else cout<<"NO"<<endl;
}
char str[50];
scanf("%s",str);
}`
    },  
    
    {
        key: "Inspector Gadget just installed new springs in his",
        content: `#include<bits/stdc++.h>
using namespace std;
int main()
{
    string s1,s2,s3,s4,s5,s6;
    cin>>s1>>s2>>s3>>s4>>s5>>s6;
    float a,b,c;
    if(s2=="?"){
        b=stof(s4);
        c=stof(s6);
        //cout<<c;
        cout<<"F "<<fixed<<setprecision(2)<<(-b)*c;
    }
    else if(s4=="?"){
        a=stof(s2);
        c=stof(s6);
        cout<<"K "<<fixed<<setprecision(2)<<a/(-c);
    }
    else
    {
        a=stof(s2);
        b=stof(s4);
        cout<<"X "<<fixed<<setprecision(2)<<a/(-b);
    }
    return 0;
}`
    },     

    {
        key: "Scrooge McDuck's vault is practically overflowing.",
        content: `#include<iostream>
using namespace std;
int main()
{
    int p,q,r,i;
    int c;
    cin>>c;
    for(i=0;i<c;i++){
        cin>>p>>q>>r;
        q=q+(r-1)/5;
        r=(r-1)%5+1;
        p=p+(q-1)/10;
        q=(q-1)%10+1;
        cout<<p<<" ";
        cout<<q<<" ";
        cout<<r<<endl;
    }
	return 0;
}`
    },     

    {
        key: "Shankar is a volleyball trainer at government scho",
        content: `#include <bits/stdc++.h>
using namespace std;
typedef long long LL;
const int N=(int)1e6+6,mod=(int)0;
int a[N];
long long sum[N];
int main(){
int tc;
cin>>tc;
for(int tt=1;tt<=tc;++tt){
int n,p;
cin>>n>>p;
for(int j=0;j<n;++j)
cin>>a[j];
sort(a,a+n);
int i;
for(i=0;i<n;i++) sum[i+1]=sum[i]+a[i];
long long res=1e18;
for(int j=p-1;j<n;++j){
long long s=sum[j+1]-sum[j-(p-1)]; long long cost=(LL)a[j]*p-s; res=min(res,cost);
}
cout<<res<<'\n';
}
}`
    },    
    
    {
        key: "Prithvi are in the world of mathematics to solve t",
        content: `#include <bits/stdc++.h>
using namespace std;
int main()
{
 int numberOfColumns;
 cin>>numberOfColumns;
 int bananaMatrix[2 * numberOfColumns - 1][numberOfColumns]; //Input matrix
 int maxBanana[2 * numberOfColumns - 1][numberOfColumns]; //Memoized matrix
 memset(maxBanana, 0, sizeof(maxBanana)); //Setting 0 to all cell, will update for maximum
 memset(bananaMatrix, 0, sizeof(bananaMatrix)); //Setting 0 to all cell, will update for inputs
 //Input for upper triangle
 for (int row = 0; row < numberOfColumns; row++)
 for (int column = 0; column <= row; column++)
 cin >> bananaMatrix[row][column];
 //Input for lower triangle
 int shiftedPosition = 1;
 for (int row = numberOfColumns; row < (numberOfColumns * 2) - 1; row++)
 {
 for (int column = shiftedPosition; column < numberOfColumns; column++)
 cin >> bananaMatrix[row][column];
 shiftedPosition++;
 }
 maxBanana[0][0] = bananaMatrix[0][0];
 for (int row = 1; row < numberOfColumns; row++)
 {
 for (int column = 0; column <= row; column++)
 if (column == 0)//Caution for negative indexes.
 maxBanana[row][column] = maxBanana[row - 1][column] +
bananaMatrix[row][column];
 else
 maxBanana[row][column] = max(maxBanana[row - 1][column], maxBanana[row
- 1][column - 1]) + bananaMatrix[row][column];
 }
 //Memoizing the lower triangle to store the max value
 shiftedPosition = 1;
 for (int row = numberOfColumns; row < (numberOfColumns * 2) - 1; row++)
 {
 for (int column = shiftedPosition; column < numberOfColumns; column++)
 maxBanana[row][column] = max(maxBanana[row - 1][column], maxBanana[row -
1][column - 1]) + bananaMatrix[row][column];
 shiftedPosition++;
 }
 cout <<maxBanana[2 * numberOfColumns - 2][numberOfColumns - 1];

 return 0;
 cout<<"cin>>carrotMatrix[row][column];";
}`
    },   

    // dp bhai

{
        key: "Padmavati is a clever girl and she wants to partic",
        content: `#include <iostream>
#include <map>
using namespace std;
const int N=1<<20;
int n,a[N],c[N],w;
void upd(int i,int c){
}
int main(){
 cin>>n;
 for(int i=0;i<n;++i)cin>>a[i];
 map<int,int>u,v;
 for(int i=n;i-->0;){
 int x=++u[a[i]];
 while(x<N)++c[x],x+=x&-x;
 }
 for(int i=0;i<n;++i){
 int x=u[a[i]]--,y=v[a[i]]++;
 while(x<N)--c[x],x+=x&-x;
 while(y>0)w+=c[y],y-=y&-y;
 }
 cout<<w<<endl;
}`
    },  	


    // this code below only clears 87% test case but is the best possible solution. Semi-working:1
    {
        key: "Tamil New Year is approaching and thus Ganesan wan",
        content: `#include <stdio.h>
    
    int main() {
        int a,b,t;
        
        scanf("%d", &t);  
    
        for(int i = 0; i < t; i++) {  
            scanf("%d %d", &a, &b); 
    
                int g = a / b;  
                printf("%d\n", g);
        }
        return 0;
    }
    // Yhe question possible nahi hai: Using a for loop adds a decision point, so cyclomatic complexity cannot be 1.
    // Instead, you can try using recursion to process inputs without a loop.
    // Otherwise, move on to the next question.
    
            `
    }

];

// current answer base- working (contriubted by me)- 60
// current answer base- working (from G ji account)- 20 
// current answer base- working (from Sher ji account)- 10
// dp bhai - 1
// current answer base- semi-working (contriubted by me)- 1 --> (87%, Semi-working:1)

// total working key data- 91
// total key data- 92

export default qnaDatabase;

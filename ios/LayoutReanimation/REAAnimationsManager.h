#import <Foundation/Foundation.h>
#import <RNReanimated/REANodesManager.h>
#import <RNReanimated/REASnapshot.h>
#import <React/RCTUIManager.h>
#if __cplusplus
#import <RNReanimated/LayoutAnimationsProxy.h>
#endif // __cplusplus

NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSInteger, ViewState) {
  Inactive,
  Appearing,
  Disappearing,
  Layout,
  ToRemove,
};

typedef BOOL (^REAHasAnimationBlock)(NSNumber *_Nonnull tag, NSString *_Nonnull type);
typedef void (^REAAnimationStartingBlock)(
    NSNumber *_Nonnull tag,
    NSString *_Nonnull type,
    NSDictionary *_Nonnull yogaValues,
    NSNumber *_Nonnull depth);
typedef void (^REAAnimationRemovingBlock)(NSNumber *_Nonnull tag, bool force);

@interface REAAnimationsManager : NSObject

- (instancetype)initWithUIManager:(RCTUIManager *)uiManager;
- (void)setNodeManager:(REANodesManager *)nodeManager;
- (REANodesManager *)getNodeManager;
#if __cplusplus
- (void)setLayoutAnimationProxy:(std::shared_ptr<reanimated::LayoutAnimationsProxy>)layoutAnimationsProxy;
#endif // __cplusplus
- (void)setRemovedSharedTransitionViews:(NSMutableDictionary<NSNumber *, UIView *> *)removedSharedTransitionViews;
- (void)setAnimationStartingBlock:(REAAnimationStartingBlock)startAnimation;
- (void)setHasAnimationBlock:(REAHasAnimationBlock)hasAnimation;
- (void)setAnimationRemovingBlock:(REAAnimationRemovingBlock)clearAnimation;
- (void)progressLayoutAnimationWithStyle:(NSDictionary *_Nonnull)newStyle forTag:(NSNumber *_Nonnull)tag;
- (void)progressSharedTransitionAnimationWithStyle:(NSDictionary *_Nonnull)newStyle forTag:(NSNumber *_Nonnull)tag;
- (void)endLayoutAnimnationForTag:(NSNumber *_Nonnull)tag cancelled:(BOOL)cancelled removeView:(BOOL)removeView;
- (void)invalidate;
- (void)viewDidMount:(UIView *)view withBeforeSnapshot:(REASnapshot *)snapshot;
- (REASnapshot *)prepareSnapshotBeforeMountForView:(UIView *)view;
- (BOOL)wantsHandleRemovalOfView:(UIView *)view;
- (void)removeAnimationsFromSubtree:(UIView *)view;
- (void)removeChildren:(NSArray<UIView *> *)children fromContainer:(UIView *)container;
- (void)onViewCreate:(UIView *)view after:(REASnapshot *)after;
- (void)onViewUpdate:(UIView *)view before:(REASnapshot *)before after:(REASnapshot *)after;
- (void)stopAnimation:(NSNumber *)tag;
- (void)onViewTransition:(UIView *)view before:(REASnapshot *)before after:(REASnapshot *)after;

@end

NS_ASSUME_NONNULL_END
